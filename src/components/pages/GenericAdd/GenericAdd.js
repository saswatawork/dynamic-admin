import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Form, Input, TextArea } from "components/atoms";
import { Button, ButtonType } from "components/atoms/Button";
import { ADMIN_URL } from "config";
import Modules from "json/module.json";
import "./GenericAdd.scss";

const GenericAdd = () => {
  const history = useHistory();
  const { moduleName } = useParams();
  const [validated, setValidated] = useState(false);
  const [moduleFields, setModuleFields] = useState();
  const [tableName, setTableName] = useState();
  const [moduleData, setModuleData] = useState({});

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
    getModuleFields();
  }, [getModuleFields]);

  const handleSave = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      axios
        .post(ADMIN_URL + moduleName, { [tableName]: moduleData })
        .then(() => {
          history.push(`/dashboard/${moduleName}`);
        });
    }
    setValidated(true);
  };

  return (
    <div className="generic-add">
      {moduleFields && (
        <Form noValidate validated={validated} onSubmit={handleSave}>
          <h4 className="title">Add {moduleName}</h4>
          {moduleFields.map(([key, value]) => {
            return value === "text" ? (
              <TextArea
                required
                key={`input-${key}`}
                id={`input-${key}`}
                placeholder={key}
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
                required
                key={`input-${key}`}
                name={key}
                id={`input-${key}`}
                value={moduleData[key] || ""}
                onChange={event =>
                  setModuleData({
                    ...moduleData,
                    [key]: event.target.value
                  })
                }
                placeholder={key}
              />
            );
          })}
          <Button type={ButtonType.SUBMIT}>Save</Button>
        </Form>
      )}
    </div>
  );
};

export default GenericAdd;
