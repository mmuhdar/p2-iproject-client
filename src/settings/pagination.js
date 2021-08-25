import { TPagination } from "vue-tailwind/dist/components";

const settings = {
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
        wrapper: "table border-collapse text-center mx-auto shadow-sm",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
        activeElement:
          "w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600",
        disabledElement: "w-8 h-8 border border-gray-200 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-200 hidden md:table-cell",
        activeButton:
          "bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
      variants: {
        rounded: {
          wrapper: "mx-auto text-center flex space-x-2",
          element: "w-8 h-8 rounded-full",
          activeElement: "w-8 h-8 rounded-full",
          disabledElement: "w-8 h-8 rounded-full",
          ellipsisElement: "w-8 h-8 rounded-full hidden md:inline",
          activeButton:
            "border border-main bg-yellow-500 w-full h-full rounded-full text-white hover:bg-yellow-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "text-main border border-white  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out",
          button:
            "text-white border border-secondary hover:bg-main-800 hover:border-main-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-main-500 focus:outline-none focus:ring-opacity-50",
          ellipsis: "",
        },
      },
    },
  },
};

export default settings;
