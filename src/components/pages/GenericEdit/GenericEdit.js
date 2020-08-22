import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button, Input, TextArea } from "components/atoms";
import { ADMIN_URL } from "config";
import Modules from "json/module.json";
import "./GenericEdit.scss";

const GenericEdit = () => {
  const history = useHistory();
  const { moduleName, moduleItemId } = useParams();
  const [moduleFields, setModuleFields] = useState();
  const [tableName, setTableName] = useState();
  const [moduleData, setModuleData] = useState({});

  const getModuleData = useCallback(() => {
    axios.get(`${ADMIN_URL + moduleName}/${moduleItemId}`).then(res => {
      setModuleData(res.data);
    });
  }, [moduleName, moduleItemId]);

  const getModuleFields = useCallback(() => {
    const moduleObj = Modules.find(
      moduleItem => moduleItem.module === moduleName
    );
    if (moduleObj && moduleObj.fields && moduleObj.tableName) {
      setModuleFields(Object.entries(moduleObj.fields));
      setTableName(moduleObj.tableName);
    }
  }, [moduleName]);

  useEffect(() => {
    getModuleData();
    getModuleFields();
  }, [getModuleData, getModuleFields]);

  const handleSave = e => {
    e.preventDefault();
    axios
      .put(`${ADMIN_URL + moduleName}/${moduleItemId}`, {
        [tableName]: moduleData
      })
      .then(() => {
        history.push(`/dashboard/${moduleName}`);
      });
  };

  return (
    <div className="generic-edit">
      {moduleFields && (
        <Form>
          <h4 className="title">Edit {moduleName}</h4>
          {moduleFields.map(([key, value]) => {
            return value === "text" ? (
              <TextArea
                key={`input-${key}`}
                id={`input-${key}`}
                name={key}
                label={key}
                value={moduleData[key] || ""}
                onChange={event =>
                  setModuleData({
                    ...moduleData,
                    [key]: event.target.value
                  })
                }
              />
            ) : (
              <Input
                key={`input-${key}`}
                id={`input-${key}`}
                name={key}
                value={moduleData[key] || ""}
                onChange={event =>
                  setModuleData({
                    ...moduleData,
                    [key]: event.target.value
                  })
                }
                label={key}
              />
            );
          })}
          <Button
            type="submit"
            className="form-input"
            onClick={e => handleSave(e)}
          >
            Save
          </Button>
        </Form>
      )}
    </div>
  );
};

export default GenericEdit;
