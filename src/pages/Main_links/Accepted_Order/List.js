import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  DropdownItem,
  Form,
} from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Col,
  PaginationComponent,
  Button,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  TooltipComponent,
  RSelect,
  PreviewAltCard,
} from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { filterStatus, Data } from "./Data";
import { findUpper } from "../../../utils/Utils";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "./Context";

const List = () => {
  const { contextData } = useContext(Context);
  const [data, setData] = contextData;

  const [sm, updateSm] = useState(false);
  const [onSearchText] = useState("");
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  });
  const [editId, setEditedId] = useState();
  const [formData, setFormData] = useState({
    order_no: "",
    cus_id: "",
    delivery_date: "",
    description: "",
    payment_type: "",
    confirm_by: "",
    quot_no: "",
    rep_id: "",
    qreject_date: "",
    reason_id: "",
    reasons: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  // unselects the data on mount
  useEffect(() => {
    let newData;
    newData = Data.map((item) => {
      item.checked = false;
      return item;
    });
    setData([...newData]);
  }, []); 

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = Data.filter((item) => {
        return (
          item.order_no.toLowerCase().includes(onSearchText.toLowerCase())
        );
      });
      setData([...filteredObject]);
    } else {
      setData([...Data]);
    }
  }, [onSearchText, setData]);

  // function to change the selected property of an item
  const onSelectChange = (e, id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].checked = e.currentTarget.checked;
    setData([...newData]);
  };

  // function to reset the form
  const resetForm = () => {
    setFormData({
      order_no: "",
      cus_id: "",
      delivery_date: "",
      description: "",
      payment_type: "",
      confirm_by: "",
      quot_no: "",
      rep_id: "",
      qreject_date: "",
      reason_id: "",
      reasons: "",
    });
  };

  // function to close the form modal
  const onFormCancel = () => {
    setModal({ edit: false, add: false });
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { order_no, cus_id,  delivery_date, description, payment_type, confirm_by, quot_no, qreject_date, reason_id, reasons} = submitData;
    let submittedData = {
      id: data.length + 1,
      order_no: order_no,
      cus_id: cus_id,
      delivery_date: delivery_date,
      description: description,
      payment_type: payment_type,
      confirm_by: confirm_by,
      quot_no: quot_no,
      rep_id: rep_id,
      qreject_date: qreject_date,
      reason_id: reason_id,
      reasons: reasons,
    };
    setData([submittedData, ...data]);
    resetForm();
    setModal({ edit: false }, { add: false });
  };

  // submit function to update a new item
  const onEditSubmit = (submitData) => {
    const { order_no, cus_id,  delivery_date, description, payment_type, confirm_by, quot_no, qreject_date, reason_id, reasons } = submitData;
    let submittedData;
    let newitems = data;
    newitems.forEach((item) => {
      if (item.id === editId) {
        submittedData = {
          id: item.id,
          order_no: item.order_no,
          cus_id: item.cus_id,
          delivery_date: item.delivery_date,
          description: item.description,
          payment_type: item.payment_type,
          confirm_by: item.confirm_by,
          quot_no: item.quot_no,
          rep_id: item.rep_id,
          qreject_date: item.qreject_date,
          reason_id: item.reason_id,
          created_id: item.created_id,

        };
      }
    });
    let index = newitems.findIndex((item) => item.id === editId);
    newitems[index] = submittedData;
    setModal({ edit: false });
    resetForm();
  };

  // function that loads the want to editted data
  const onEditClick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        setFormData({
          id: item.id,
          order_no: item.order_no,
          cus_id: item.cus_id,
          delivery_date: item.delivery_date,
          description: item.description,
          payment_type: item.payment_type,
          confirm_by: item.confirm_by,
          quot_no: item.quot_no,
          rep_id: item.rep_id,
          qreject_date: item.qreject_date,
          reason_id: item.reason_id,
          reasons: item.reasons,
        });
        setModal({ edit: true }, { add: false });
        setEditedId(id);
      }
    });
  };


  // function to change the check property of an item
  const selectorCheck = (e) => {
    let newData;
    newData = data.map((item) => {
      item.checked = e.currentTarget.checked;
      return item;
    });
    setData([...newData]);
  };

  // function to delete the seletected item
  const selectorDelete = () => {
    let newData;
    newData = data.filter((item) => item.checked !== true);
    setData([...newData]);
  };

  

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="ACCEPTED ORDER"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                Accepted Order
              </BlockTitle>
              <BlockTitle tag="h5" page>
              Accepted Order Records List
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <Button color="light" outline className="btn-white">
                        <span>Export</span>
                        <Icon name="download-cloud"></Icon>
                      </Button>
                    </li> 
                    <li>
                      <Button color="light" outline className="btn-white" onClick={() => setModal({ add: true })}>
                        <span>Add</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <div className="nk-tb-list is-separate is-medium mb-3">
            <DataTableHead className="nk-tb-item">
              <DataTableRow className="nk-tb-col-check">
                <div className="custom-control custom-control-sm custom-checkbox notext">
                  <input
                    type="checkbox"
                    className="custom-control-input form-control"
                    onChange={(e) => selectorCheck(e)}
                    id="uid"
                  />
                  <label className="custom-control-label" htmlFor="uid"></label>
                </div>
              </DataTableRow>
              <DataTableRow>
                <span className="sub-text">ID</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">ORDER NO</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">CUS. ID</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">DELIVERY DATE</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">DESCRIPTION</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">PAYMENT TYPE</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">CONFORMED BY</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">QUOT. NO</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">SALES REP ID</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">QUOT. REJECTION DATE</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">REASON ID</span>
              </DataTableRow>
              <DataTableRow size="lg">
                <span className="sub-text">OTHER REASONS</span>
              </DataTableRow>

              <DataTableRow className="nk-tb-col-tools text-right">
                <UncontrolledDropdown>
                  <DropdownToggle color="tranparent" className="dropdown-toggle btn btn-icon btn-trigger mr-n1">
                    <Icon name="more-h"></Icon>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#"
                          onClick={(ev) => {
                            ev.preventDefault();
                            selectorDelete();
                          }}
                        >
                          <Icon name="na"></Icon>
                          <span>Remove Selected</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DataTableRow>
            </DataTableHead>
            {/*Head*/}
            {currentItems.length > 0
              ? currentItems.map((item) => (
                  <DataTableItem key={item.id}>
                    <DataTableRow className="nk-tb-col-check">
                      <div className="custom-control custom-control-sm custom-checkbox notext">
                        <input
                          type="checkbox"
                          className="custom-control-input form-control"
                          defaultChecked={item.checked}
                          id={item.id + "uid1"}
                          key={Math.random()}
                          onChange={(e) => onSelectChange(e, item.id)}
                        />
                        <label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
                      </div>
                    </DataTableRow>
                    <DataTableRow>
                    <span>{item.id}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.order_no}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.cus_id}</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                      <span>{item.delivery_date}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.description}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.payment_type}</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                      <span>{item.confirm_by}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.quot_no}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.rep_id}</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                      <span>{item.qreject_date}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.reason_id}</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                      <span>{item.reasons}</span>
                    </DataTableRow>

                    <DataTableRow className="nk-tb-col-tools">
                      <ul className="nk-tb-actions gx-1">
                        <li>
                          <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                              <Icon name="more-h"></Icon>
                            </DropdownToggle>
                            <DropdownMenu right>
                              <ul className="link-list-opt no-bdr">
                                <li onClick={() => onEditClick(item.id)}>
                                  <DropdownItem
                                    tag="a"
                                    href="#edit"
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                    }}
                                  >
                                    <Icon name="edit"></Icon>
                                    <span>Edit Selected</span>
                                  </DropdownItem>
                                </li>
                                <li>
                        <DropdownItem
                          tag="a"
                          href="#"
                          onClick={(ev) => {
                            ev.preventDefault();
                            selectorDelete();
                          }}
                        >
                          <Icon name="na"></Icon>
                          <span>Remove Selected</span>
                        </DropdownItem>
                      </li>
                              </ul>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </li>
                      </ul>
                    </DataTableRow>
                  </DataTableItem>
                ))
              : null}
          </div>
          <PreviewAltCard>
            {currentItems.length > 0 ? (
              <PaginationComponent
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            ) : (
              <div className="text-center">
                <span className="text-silent">No data found on database</span>
              </div>
            )}
          </PreviewAltCard>
        </Block>

        <Modal isOpen={modal.add} toggle={() => setModal({ add: false })} className="modal-dialog-centered" size="lg">
          <ModalBody>
            <a
              href="#close"
              onClick={(ev) => {
                ev.preventDefault();
                onFormCancel();
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
              <h5 className="title">Add Accepted Order record</h5>
              <div className="mt-4">
                <hr />
                <Form className="row gy-4" noValidate onSubmit={handleSubmit(onFormSubmit)}>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">ORDER NO</label>
                      <input
                        className="form-control"
                        type="text"
                        name="order_no"
                        defaultValue={formData.order_no}
                        placeholder="Enter order no."
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">CUS. ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="cus_id"
                        defaultValue={formData.cus_id}
                        placeholder="Enter  cus. id"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">DELIVERY DATE</label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        name="delivery_date"
                        defaultValue={formData.delivery_date}
                        placeholder="Enter deliver date"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.phone && <span className="invalid">{errors.phone.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        defaultValue={formData.description}
                        placeholder="Enter description"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">PAYMENT TYPE</label>
                      <input
                        className="form-control"
                        type="text"
                        name="payment_type"
                        defaultValue={formData.payment_type}
                        placeholder="Enter payment type"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">CONFORMED BY</label>
                      <input
                        className="form-control"
                        type="text"
                        name="confirm_by"
                        defaultValue={formData.confirm_by}
                        placeholder="Enter confired person"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">QUOT. NO</label>
                      <input
                        className="form-control"
                        type="text"
                        name="quot_no"
                        defaultValue={formData.ordquot_noer_no}
                        placeholder="Enter quot number"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">SALES REP. ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="rep_id"
                        defaultValue={formData.rep_id}
                        placeholder="Enter sales rep id"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">QUOT. REJECTION DATE</label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        name="qreject_date"
                        defaultValue={formData.qreject_date}
                        placeholder="Enter rejection date"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Reason ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="reason_id"
                        defaultValue={formData.reason_id}
                        placeholder="Enter rejection ID"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Reasons</label>
                      <input
                        className="form-control"
                        type="text"
                        name="reasons"
                        defaultValue={formData.reasons}
                        placeholder="Enter reasons"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="light" outline className="btn-white" size="md" type="submit">
                          Add Accepted Order
                      </Button>
                        <a
                          href="#cancel"
                          onClick={(ev) => {
                            ev.preventDefault();
                            onFormCancel();
                          }}
                          className="link link-light ml-2"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal.edit} toggle={() => setModal({ edit: false })} className="modal-dialog-centered" size="lg">
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                onFormCancel();
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
              <h5 className="title">Update Accepted Order Record</h5>
              <div className="mt-4">
                <hr />
                <Form className="row gy-4" onSubmit={handleSubmit(onEditSubmit)}>
                <Col md="6">
                    <FormGroup>
                      <label className="form-label">ORDER NO</label>
                      <input
                        className="form-control"
                        type="text"
                        name="order_no"
                        defaultValue={formData.order_no}
                        placeholder="Enter order no."
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">CUS. ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="cus_id"
                        defaultValue={formData.cus_id}
                        placeholder="Enter  cus. id"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">DELIVERY DATE</label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        name="delivery_date"
                        defaultValue={formData.delivery_date}
                        placeholder="Enter deliver date"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.phone && <span className="invalid">{errors.phone.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        defaultValue={formData.description}
                        placeholder="Enter description"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">PAYMENT TYPE</label>
                      <input
                        className="form-control"
                        type="text"
                        name="payment_type"
                        defaultValue={formData.payment_type}
                        placeholder="Enter payment type"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">CONFORMED BY</label>
                      <input
                        className="form-control"
                        type="text"
                        name="confirm_by"
                        defaultValue={formData.confirm_by}
                        placeholder="Enter confired person"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">QUOT. NO</label>
                      <input
                        className="form-control"
                        type="text"
                        name="quot_no"
                        defaultValue={formData.ordquot_noer_no}
                        placeholder="Enter quot number"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">SALES REP. ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="rep_id"
                        defaultValue={formData.rep_id}
                        placeholder="Enter sales rep id"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">QUOT. REJECTION DATE</label>
                      <input
                        className="form-control"
                        type="datetime-local"
                        name="qreject_date"
                        defaultValue={formData.qreject_date}
                        placeholder="Enter rejection date"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Reason ID</label>
                      <input
                        className="form-control"
                        type="text"
                        name="reason_id"
                        defaultValue={formData.reason_id}
                        placeholder="Enter rejection ID"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Reasons</label>
                      <input
                        className="form-control"
                        type="text"
                        name="reasons"
                        defaultValue={formData.reasons}
                        placeholder="Enter reasons"
                        ref={register({ required: "This field is required" })}
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                      <Button color="light" outline className="btn-white" size="md" type="submit">
                          Update Accepted Order
                      </Button>
                      </li>
                      <li>
                        <a
                          href="#cancel"
                          onClick={(ev) => {
                            ev.preventDefault();
                            onFormCancel();
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Form>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};
export default List;
