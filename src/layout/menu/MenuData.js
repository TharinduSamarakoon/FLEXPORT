const menu = [
  {
    heading: "FlexPort Control Panel",
  },
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/",
  },
  {
    icon: "users-fill",
    text: "Order Acceptance",
    link: "/customer",
  },
  {
    icon: "sign-waves-alt",
    text: "Materials",
    active: false,
    subMenu: [
      {
        text: "Materials",
        link: "/material",
      },
      {
        text: "Material Groups",
        link: "/material_Group",
      },
      {
        text: "Material Categories",
        link: "/material_Category",
      },
    ],
  },
  {
    icon: "building-fill",
    text: "Products",
    active: false,
    subMenu: [
      {
        text: "Products",
        link: "/product",
      },
      {
        text: "Product Groups",
        link: "/product_Group",
      },
      {
        text: "Product Categories",
        link: "/product_Category",
      },
    ],
  },
  {
    icon: "cart-fill",
    text: "Order Managemnt",
    active: false,
    subMenu: [
      {
        text: "Accept Orders",
        link: "/accepted_Orders",
      },
      {
        text: "Updated Orders",
        link: "/updated_Orders",
      },
    ],
  },
  {
    icon: "user-fill",
    text: "User Managemnt",
    active: false,
    subMenu: [
      {
        text: "Users",
        link: "/users",
      },
      {
        text: "User Roles",
        link: "/user_Roles",
      },
    ],
  },
  {
    icon: "user-fill-c",
    text: "User Permissions",
    link: "/permission",
  },
  {
    icon: "user-list-fill",
    text: "Sale Reps Management",
    link: "/reps",
  },
  {
    icon: "file-docs",
    text: "Invoices",
    link: "/invoices-list",
  },
  {
    icon: "file-docs",
    text: "Quotations",
    link: "/quotation-list",
  },
  {
    heading: "All Reports",
  },
  {
    icon: "file-docs",
    text: "Change Form",
    link: "/change_form",
  },
  {
    icon: "file-docs",
    text: "Despatched Note",
    link: "/despatched_note",
  },
  {
    icon: "file-docs",
    text: "Order Completion",
    link: "/order_completion",
  },
  {
    icon: "file-docs",
    text: "Payment Receipt",
    link: "/payment_recipt",
  },
  {
    icon: "file-docs",
    text: "Purchase Order",
    link: "/purchase_order",
  },
  {
    icon: "file-docs",
    text: "Rejection Form",
    link: "/rejection_form",
  },
  {
    icon: "file-docs",
    text: "Stores Materials",
    link: "/stores_materials",
  },
  {
    icon: "file-docs",
    text: "Suspence Note",
    link: "/suspence_note",
  },
  {
    icon: "file-docs",
    text: "Voucher Innovations",
    link: "/voucher_innovations",
  },
  {
    icon: "file-docs",
    text: "Job Specification",
    link: "/job_specification",
  },
  {
    icon: "file-docs",
    text: "Estimate Time and Process",
    link: "/extimate_t&p",
  },
  {
    icon: "file-docs",
    text: "Job Evaluation",
    link: "/job_evaluation",
  }
];
export default menu;
