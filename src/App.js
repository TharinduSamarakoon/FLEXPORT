import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";
import Layout from "./layout/Index";
import Error404Modern from "./pages/error/404-modern";
import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ForgotPassword2 from "./pages/auth/ForgotPassword-step2";
import Success from "./pages/auth/Success";
import InvoicePrint from "./pages/Main_links/Invoices/InvoicePrint";
import QuotationPrint from "./pages/Main_links/Quotations/QuotationPrint";
import Change_FormPrint from "./pages/Main_links/Reports/Change_Form/Change_FormPrint";
import Despatched_NotePrint from "./pages/Main_links/Reports/Despatched_Note/Despatched_NotePrint";
import Voucher_InnovationsPrint from "./pages/Main_links/Reports/Voucher_Innovations/Voucher_InnovationsPrint";
import Estimate_Time_ProcessPrint from "./pages/Main_links/Reports/Estimate_Time_Process/Estimate_Time_ProcessPrint";
import Job_SpecificationPrint from "./pages/Main_links/Reports/Job_Specification/Job_SpecificationPrint";
import Order_CompletionPrint from "./pages/Main_links/Reports/Order_Completion/Order_CompletionPrint";
import Payment_ReceiptPrint from "./pages/Main_links/Reports/Payment_Receipt/Payment_ReceiptPrint";
import Purchase_OrderPrint from "./pages/Main_links/Reports/Purchase_Order/Purchase_OrderPrint";
import Rejection_FormPrint from "./pages/Main_links/Reports/Rejection_Form/Rejection_FormPrint";
import Stores_MaterialsPrint from "./pages/Main_links/Reports/Stores_Materials/Stores_MaterialsPrint";
import Suspence_NotePrint from "./pages/Main_links/Reports/Suspence_Note/Suspence_NotePrint";

const App = (props) => {
  return (
    <Switch>
      {/* Auth Pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/auth-success`} component={Success}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-reset`} component={ForgotPassword}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-reset2`} component={ForgotPassword2}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-register`} component={Register}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auth-login`} component={Login}></Route>

      {/* Print Pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>

      {/* Helper pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/auths/terms`} component={Terms}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/auths/faq`} component={Faq}></Route>

      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/quotation-print`} component={QuotationPrint}></Route>

      {/* Reports */}
      <Route exact path={`${process.env.PUBLIC_URL}/change_form-print`} component={Change_FormPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/despatched_note-print`} component={Despatched_NotePrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/voucher_innovations-print`} component={Voucher_InnovationsPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/extimate_t&p-print`} component={Estimate_Time_ProcessPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/job_specification-print`} component={Job_SpecificationPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/order_completion-print`} component={Order_CompletionPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/payment_recipt-print`} component={Payment_ReceiptPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/purchase_order-print`} component={Purchase_OrderPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/rejection_form-print`} component={Rejection_FormPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/stores_materials-print`} component={Stores_MaterialsPrint}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/suspence_note-print`} component={Suspence_NotePrint}></Route>

      {/*Error Pages*/}
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Modern}></Route>
    

      {/*Main Routes*/}
      <PrivateRoute exact path="" component={Layout}></PrivateRoute>
      <Route component={RedirectAs404}></Route>
    </Switch>
  );
};
export default withRouter(App);
