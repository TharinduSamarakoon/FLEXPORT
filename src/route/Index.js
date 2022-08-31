import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";


import { ContextProvider } from "../pages/Main_links/user-manage/Context";
import { RepsContextProvider } from "../pages/Main_links/Sales_rep/Context";
import { CustomerContextProvider } from "../pages/Main_links/Customer/Context";
import { PermissionContextProvider } from "../pages/Main_links/User_Permission/Context";
import { MCategoryContextProvider } from "../pages/Main_links/Material_Category/Context";
import { MaterialContextProvider } from "../pages/Main_links/Material/Context";
import { MGroupContextProvider } from "../pages/Main_links/Material_Group/Context";
import { ProductContextProvider } from "../pages/Main_links/Product/Context";
import { PCategoryContextProvider } from "../pages/Main_links/Product_Category/Context";
import { PGroupContextProvider } from "../pages/Main_links/Product_Group/Context";
import { AOrderContextProvider } from "../pages/Main_links/Accepted_Order/Context";
import { UOrderContextProvider } from "../pages/Main_links/Updated_Order/Context";
import { UserContextProvider } from "../pages/Main_links/Users/Context";
import { URolesContextProvider } from "../pages/Main_links/User_Roles/Context";



import Homepage from "../pages/Dashboard";
import Faq from "../pages/others/Faq";
import Terms from "../pages/others/Terms";


import List from "../pages/Main_links/user-manage/List";
import SalesList from "../pages/Main_links/Sales_rep/List";
import CustomerList from "../pages/Main_links/Customer/List";
import PermissionList from "../pages/Main_links/User_Permission/List";
import MCategoryList from "../pages/Main_links//Material_Category/List";
import MaterialList from "../pages/Main_links/Material/List";
import MGroupList from "../pages/Main_links/Material_Group/List";
import ProductList from "../pages/Main_links/Product/List";
import PCategoryList from "../pages/Main_links/Product_Category/List";
import PGroupList from "../pages/Main_links/Product_Group/List";
import AOrderList from "../pages/Main_links/Accepted_Order/List";
import UOrderList from "../pages/Main_links/Updated_Order/List";
import UsersList from "../pages/Main_links/Users/List";
import URolesList from "../pages/Main_links/User_Roles/List";


import InvoicesList from "../pages/Main_links/Invoices/InvoiceList";
import InvoicesDetails from "../pages/Main_links/Invoices/InvoiceDetails";

import QuotationList from "../pages/Main_links/Quotations/QuotationList";
import QuotationDetails from "../pages/Main_links/Quotations/QuotationDetails";

import FeedbackList from "../pages/Main_links/Feedback/FeedbackList";
import FeedbackDetails from "../pages/Main_links/Feedback/FeedbackDetails";



{/*Reports Pages*/}
import Change_FormList from "../pages/Main_links/Reports/Change_Form/Change_FormList";
import Change_FormDetails from "../pages/Main_links/Reports/Change_Form/Change_FormDetails";

import Despatched_NoteList from "../pages/Main_links/Reports/Despatched_Note/Despatched_NoteList";
import Despatched_NoteDetails from "../pages/Main_links/Reports/Despatched_Note/Despatched_NoteDetails";

import Voucher_InnovationsList from "../pages/Main_links/Reports/Voucher_Innovations/Voucher_InnovationsList";
import Voucher_InnovationsDetails from "../pages/Main_links/Reports/Voucher_Innovations/Voucher_InnovationsDetails";

import Estimate_Time_ProcessList from "../pages/Main_links/Reports/Estimate_Time_Process/Estimate_Time_ProcessList";
import Estimate_Time_ProcessDetails from "../pages/Main_links/Reports/Estimate_Time_Process/Estimate_Time_ProcessDetails";

import Job_SpecificationList from "../pages/Main_links/Reports/Job_Specification/Job_SpecificationList";
import Job_SpecificationDetails from "../pages/Main_links/Reports/Job_Specification/Job_SpecificationDetails";

import Order_CompletionList from "../pages/Main_links/Reports/Order_Completion/Order_CompletionList";
import Order_CompletionDetails from "../pages/Main_links/Reports/Order_Completion/Order_CompletionDetails";

import Payment_ReceiptList from "../pages/Main_links/Reports/Payment_Receipt/Payment_ReceiptList";
import Payment_ReceiptDetails from "../pages/Main_links/Reports/Payment_Receipt/Payment_ReceiptDetails";

import Purchase_OrderList from "../pages/Main_links/Reports/Purchase_Order/Purchase_OrderList";
import Purchase_OrderDetails from "../pages/Main_links/Reports/Purchase_Order/Purchase_OrderDetails";

import Rejection_FormList from "../pages/Main_links/Reports/Rejection_Form/Rejection_FormList";
import Rejection_FormDetails from "../pages/Main_links/Reports/Rejection_Form/Rejection_FormDetails";

import Stores_MaterialsList from "../pages/Main_links/Reports/Stores_Materials/Stores_MaterialsList";
import Stores_MaterialsDetails from "../pages/Main_links/Reports/Stores_Materials/Stores_MaterialsDetails";

import Suspence_NoteList from "../pages/Main_links/Reports/Suspence_Note/Suspence_NoteList";
import Suspence_NoteDetails from "../pages/Main_links/Reports/Suspence_Note/Suspence_NoteDetails";

import Job_Evaluation from "../pages/Main_links/Reports/Job_Evaluation/Job_Evaluation";


const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-default`}
          render={() => (
            <ContextProvider>
              <List />
            </ContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/reps`}
          render={() => (
            <RepsContextProvider>
              <SalesList />
            </RepsContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/customer`}
          render={() => (
            <CustomerContextProvider>
              <CustomerList />
            </CustomerContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/permission`}
          render={() => (
            <PermissionContextProvider>
              <PermissionList />
            </PermissionContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/material_Category`}
          render={() => (
            <MCategoryContextProvider>
              <MCategoryList />
            </MCategoryContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/material`}
          render={() => (
            <MaterialContextProvider>
              <MaterialList />
            </MaterialContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/material_Group`}
          render={() => (
            <MGroupContextProvider>
              <MGroupList />
            </MGroupContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/product`}
          render={() => (
            <ProductContextProvider>
              <ProductList />
            </ProductContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/product_Category`}
          render={() => (
            <PCategoryContextProvider>
              <PCategoryList />
            </PCategoryContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/product_Group`}
          render={() => (
            <PGroupContextProvider>
              <PGroupList />
            </PGroupContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/accepted_Orders`}
          render={() => (
            <AOrderContextProvider>
              <AOrderList />
            </AOrderContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/updated_Orders`}
          render={() => (
            <UOrderContextProvider>
              <UOrderList />
            </UOrderContextProvider>
          )}
        ></Route>


        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/users`}
          render={() => (
            <UserContextProvider>
              <UsersList />
            </UserContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user_Roles`}
          render={() => (
            <URolesContextProvider>
              <URolesList />
            </URolesContextProvider>
          )}
        ></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/invoices-list`} component={InvoicesList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/invoice-details`} component={InvoicesDetails}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/quotation-list`} component={QuotationList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/quotation-details`} component={QuotationDetails}></Route>

        {/*Demo Pages*/}
        <Route exact path={`${process.env.PUBLIC_URL}/pages/terms-policy`} component={Terms}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}></Route>

        {/*Reports Pages*/}
        <Route exact path={`${process.env.PUBLIC_URL}/change_form`} component={Change_FormList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/change_form-details`} component={Change_FormDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/despatched_note`} component={Despatched_NoteList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/despatched_note-details`} component={Despatched_NoteDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/voucher_innovations`} component={Voucher_InnovationsList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/voucher_innovations-details`} component={Voucher_InnovationsDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/extimate_t&p`} component={Estimate_Time_ProcessList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/extimate_t&p-details`} component={Estimate_Time_ProcessDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/job_specification`} component={Job_SpecificationList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/job_specification-details`} component={Job_SpecificationDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/order_completion`} component={Order_CompletionList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/order_completion-details`} component={Order_CompletionDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/payment_recipt`} component={Payment_ReceiptList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/payment_recipt-details`} component={Payment_ReceiptDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/purchase_order`} component={Purchase_OrderList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/purchase_order-details`} component={Purchase_OrderDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/rejection_form`} component={Rejection_FormList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/rejection_form-details`} component={Rejection_FormDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/stores_materials`} component={Stores_MaterialsList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/stores_materials-details`} component={Stores_MaterialsDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/suspence_note`} component={Suspence_NoteList}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/suspence_note-details`} component={Suspence_NoteDetails}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/job_evaluation`} component={Job_Evaluation}></Route>


        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
