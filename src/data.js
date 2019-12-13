import React from "react";
import moment from "moment";

export const dates = [moment(new Date()).format("YYYY-MM-DD"),moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD"), moment(new Date()).subtract(2, 'day').format("YYYY-MM-DD"),
    moment(new Date()).subtract(3, 'day').format("YYYY-MM-DD"),moment(new Date()).subtract(4, 'day').format("YYYY-MM-DD"), moment(new Date()).subtract(5, 'day').format("YYYY-MM-DD"),
    moment(new Date()).subtract(6, 'day').format("YYYY-MM-DD")];