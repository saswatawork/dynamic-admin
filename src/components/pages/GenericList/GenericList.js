import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import axios from "axios";
import { CaretTop, CaretBottom } from "react-bytesize-icons";
import {
  Button,
  ButtonSize,
  Table,
  ButtonGroup,
  Pagination,
  PageItem,
  Select
} from "components/atoms";
import { Search } from "components/features";
import { ADMIN_URL } from "config";
import "./GenericList.scss";

const GenericList = () => {
  const defaultStateRef = useRef({
    moduleData: [],
    sortBy: "updated_at",
    sortByOrder: "DESC",
    pageCount: 0,
    page: 1,
    pageLimit: 5,
    searchQuery: undefined,
    search: "",
    currentModuleName: "",
    totalModuleDataCount: 0
  });
  const { moduleName } = useParams();
  const { url } = useRouteMatch();
  const [
    {
      moduleData,
      sortBy,
      sortByOrder,
      pageCount,
      page,
      pageLimit,
      search,
      searchQuery,
      currentModuleName,
      totalModuleDataCount
    },
    setState
  ] = useState(defaultStateRef.current);

  const getModuleData = useCallback(() => {
    if (moduleName !== currentModuleName) {
      setState(state => ({
        ...state,
        ...defaultStateRef.current,
        currentModuleName: moduleName
      }));
    } else {
      let offset = 0;
      if (page > 1) {
        offset = pageLimit * (page - 1);
      }
      axios
        .get(ADMIN_URL + moduleName, {
          params: {
            sortBy,
            sortByOrder,
            offset,
            limit: pageLimit,
            searchQuery
          }
        })
        .then(res => {
          setState(state => ({ ...state, moduleData: res.data }));
        });
    }
  }, [
    currentModuleName,
    moduleName,
    defaultStateRef,
    page,
    pageLimit,
    searchQuery,
    sortBy,
    sortByOrder
  ]);

  const getModuleCount = useCallback(() => {
    axios.get(`${ADMIN_URL + moduleName}/count`).then(res => {
      if (res.data.count) {
        setState(state => ({
          ...state,
          totalModuleDataCount: res.data.count
        }));
      }
    });
  }, [moduleName]);

  useEffect(() => {
    if (totalModuleDataCount) {
      setState(state => ({
        ...state,
        pageCount: totalModuleDataCount
          ? Math.ceil(totalModuleDataCount / pageLimit)
          : 0
      }));
    }
  }, [totalModuleDataCount, pageLimit]);

  useEffect(() => {
    getModuleData();
  }, [getModuleData]);

  useEffect(() => {
    getModuleCount();
  }, [getModuleCount]);

  const handleDelete = id => {
    axios.delete(`${ADMIN_URL + moduleName}/${id}`).then(() => {
      getModuleData();
    });
  };

  const sort = moduleKey => {
    if (moduleKey !== sortBy) {
      setState(state => ({ ...state, sortBy: moduleKey, sortByOrder: "ASC" }));
    } else {
      setState(state => ({
        ...state,
        sortBy: moduleKey,
        sortByOrder: sortByOrder === "ASC" ? "DESC" : "ASC"
      }));
    }
  };

  return (
    <>
      <div className="list-header">
        <Search
          id="search-list"
          value={search}
          onChange={searchValue => {
            setState(state => ({ ...state, search: searchValue }));
          }}
          onSearch={() =>
            setState(state => ({ ...state, searchQuery: search }))
          }
        />
        <Link to={`${url}/add`}>
          <Button>Add</Button>
        </Link>
      </div>
      <div>
        {(moduleData && moduleData.length) > 0 ? (
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                {moduleData.slice(0, 1).map(moduleObj =>
                  Object.keys(moduleObj)
                    .filter(moduleKey => moduleKey !== "id")
                    .map((moduleKey, moduleIndex) => (
                      <th
                        role="button"
                        tabIndex={moduleIndex}
                        onClick={() => sort(moduleKey)}
                        onKeyDown={() => sort(moduleKey)}
                        className={`text-capitalize table-head-item  ${
                          sortBy === moduleKey ? "active" : ""
                        }`}
                        key={`module-thead-${moduleKey}`}
                      >
                        <span>{moduleKey.split("_").join(" ")}</span>
                        <span className="table-head-item__icon">
                          {sortBy === moduleKey && sortByOrder === "DESC" && (
                            <CaretBottom
                              className="active"
                              width="18"
                              height="18"
                            />
                          )}
                          {sortBy === moduleKey && sortByOrder === "ASC" && (
                            <CaretTop
                              className="active"
                              width="18"
                              height="18"
                            />
                          )}
                          {sortBy !== moduleKey && (
                            <>
                              <CaretTop width="15" height="15" />
                              <CaretBottom width="15" height="15" />
                            </>
                          )}
                        </span>
                      </th>
                    ))
                )}
                <th className="text-center">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(moduleData).map(([moduleObjIndex, moduleObj]) => (
                <tr key={`module-tr-${moduleObjIndex}`}>
                  {Object.entries(moduleObj)
                    .slice(1, moduleObj.length)
                    .map(([moduleKey, moduleValue], moduleIndex) => (
                      <td
                        className={`${moduleIndex > 0 ? "text-center" : ""}`}
                        key={`module-td-${moduleObjIndex}-${moduleKey}`}
                      >
                        {moduleValue}
                      </td>
                    ))}
                  <td className="action text-center">
                    <ButtonGroup>
                      <Link to={`${url}/edit/${moduleObj.id}`}>
                        <Button size={ButtonSize.SM}>Edit</Button>
                      </Link>
                      <Button
                        size={ButtonSize.SM}
                        onClick={() => handleDelete(moduleObj.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="text-center">No record found</p>
        )}
      </div>

      <div className="list-footer">
        <div className="no-item-per-page">
          <Select
            id="item-per-page"
            value={pageLimit}
            onChange={e => {
              const changedPageLimit = e.target.value;
              return setState(state => ({
                ...state,
                page: 1,
                pageLimit: changedPageLimit
              }));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
          <span>Items per page</span>
        </div>
        {pageCount > 1 && (
          <Pagination>
            {Object.entries(Array(pageCount + 1).fill(1, 1)).map(
              ([key], pageItem) => (
                <PageItem
                  key={key}
                  active={page === pageItem + 1}
                  onClick={() =>
                    setState(state => ({ ...state, page: pageItem + 1 }))
                  }
                >
                  {key}
                </PageItem>
              )
            )}
          </Pagination>
        )}
      </div>
    </>
  );
};

export default GenericList;
