import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";

import GraphCSS from '../Styles/Graph.module.css'

const URL = "http://localhost:3001/12";

function V8() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);
  
  const data = {
    labels: tasks,
    datasets: [
      {
        label: "Afghanistan",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Afghanistan",
        },
        pointRadius: 1,
      },
      {
        label: "Albania",
        data: tasks,
        backgroundColor: "rgb(218, 41, 28)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Albania",
        },
        pointRadius: 1,
      },
      {
        label: "Algeria",
        data: tasks,
        backgroundColor: "rgb(0, 102, 51)",
        borderColor: "rgb(210, 16, 52)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Algeria",
        },
        pointRadius: 1,
      },
      {
        label: "Andorra",
        data: tasks,
        backgroundColor: "rgb(254, 221, 0)",
        borderColor: "rgb(213, 0, 50)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Andorra",
        },
        pointRadius: 1,
      },
      {
        label: "Anguilla & Barbuda",
        data: tasks,
        backgroundColor: "rgb(255, 153, 0)",
        borderColor: "rgb(153, 204, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Antigua_and_Barbuda",
        },
        pointRadius: 1,
      },
      {
        label: "Argentina",
        data: tasks,
        backgroundColor: "rgb(108, 172, 228)",
        borderColor: "rgb(255, 184, 28)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Argentina",
        },
        pointRadius: 1,
      },
      {
        label: "Armenia",
        data: tasks,
        backgroundColor: "rgb(217, 0, 18)",
        borderColor: "rgb(255, 158, 27)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Armenia",
        },
        pointRadius: 1,
      },
      {
        label: "Aruba",
        data: tasks,
        backgroundColor: "rgb(65, 143, 222)",
        borderColor: "rgb(65, 143, 222)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Aruba",
        },
        pointRadius: 1,
      },
      {
        label: "Australia",
        data: tasks,
        backgroundColor: "rgb(1, 33, 105)",
        borderColor: "rgb(228, 0, 43)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Australia",
        },
        pointRadius: 1,
      },
      {
        label: "Austria",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Austria",
        },
        pointRadius: 1,
      },
      {
        label: "Azerbaijan",
        data: tasks,
        backgroundColor: "rgb(0, 146, 188)",
        borderColor: "rgb(0, 175, 102)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Azerbaijan",
        },
        pointRadius: 1,
      },
      {
        label: "Bahamas",
        data: tasks,
        backgroundColor: "rgb(0, 169, 206)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bahamas",
        },
        pointRadius: 1,
      },
      {
        label: "Bahrain",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bahrain",
        },
        pointRadius: 1,
      },
      {
        label: "Bangladesh",
        data: tasks,
        backgroundColor: "rgb(0, 106, 78)",
        borderColor: "rgb(244, 42, 65)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bangladesh",
        },
        pointRadius: 1,
      },
      {
        label: "Barbados",
        data: tasks,
        backgroundColor: "rgb(0, 38, 127)",
        borderColor: "rgb(255, 199, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Barbados",
        },
        pointRadius: 1,
      },
      {
        label: "Belarus",
        data: tasks,
        backgroundColor: "rgb(210, 39, 48)",
        borderColor: "rgb(0, 175, 102)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Belarus",
        },
        pointRadius: 1,
      },
      {
        label: "Belgium",
        data: tasks,
        backgroundColor: "rgb(255, 205, 0)",
        borderColor: "rgb(45, 41, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Belgium",
        },
        pointRadius: 1,
      },
      {
        label: "Belize",
        data: tasks,
        backgroundColor: "rgb(23, 22, 150)",
        borderColor: "rgb(23, 22, 150)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Belize",
        },
        pointRadius: 1,
      },
      {
        label: "Benin",
        data: tasks,
        backgroundColor: "rgb(0, 135, 81)",
        borderColor: "rgb(0, 135, 81)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Benin",
        },
        pointRadius: 1,
      },
      {
        label: "Bermuda",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bermuda",
        },
        pointRadius: 1,
      },
      {
        label: "Bhutan",
        data: tasks,
        backgroundColor: "rgb(255, 205, 0)",
        borderColor: "rgb(255, 103, 32)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bhutan",
        },
        pointRadius: 1,
      },
      {
        label: "Bonaire, Saint Estatius, Saba",
        data: tasks,
        backgroundColor: "rgb(1, 42, 135)",
        borderColor: "rgb(1, 42, 135)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bonaire_Saint_Eustatius_and_Saba",
        },
        pointRadius: 1,
      },
      {
        label: "Bosnia and Herzegovina",
        data: tasks,
        backgroundColor: "rgb(0, 47, 108)",
        borderColor: "rgb(255, 205, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bosnia_and_Herzegovina",
        },
        pointRadius: 1,
      },
      {
        label: "Botswana",
        data: tasks,
        backgroundColor: "rgb(171, 202, 233)",
        borderColor: "rgb(171, 202, 233)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Botswana",
        },
        pointRadius: 1,
      },
      {
        label: "Brazil",
        data: tasks,
        backgroundColor: "rgb(0, 151, 57)",
        borderColor: "rgb(254, 221, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Brazil",
        },
        pointRadius: 1,
      },
      {
        label: "British Virgin Islands",
        data: tasks,
        backgroundColor: "rgb(0, 32, 91)",
        borderColor: "rgb(76, 141, 43)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "British_Virgin_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Brunei Darussalam",
        data: tasks,
        backgroundColor: "rgb(252, 227, 0)",
        borderColor: "rgb(252, 227, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Brunei_Darussalam",
        },
        pointRadius: 1,
      },
      {
        label: "Bulgaria",
        data: tasks,
        backgroundColor: "rgb(0, 150, 110)",
        borderColor: "rgb(214, 38, 18)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bulgaria",
        },
        pointRadius: 1,
      },
      {
        label: "Burkina Faso",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(0, 151, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Burkina_Faso",
        },
        pointRadius: 1,
      },
      {
        label: "Burundi",
        data: tasks,
        backgroundColor: "rgb(30, 181, 58)",
        borderColor: "rgb(206, 17, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Burundi",
        },
        pointRadius: 1,
      },
      {
        label: "Cambodia",
        data: tasks,
        backgroundColor: "rgb(224, 0, 37)",
        borderColor: "rgb(3, 46, 161)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Cambodia",
        },
        pointRadius: 1,
      },
      {
        label: "Canada",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(216, 6, 33)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Canada",
        },
        pointRadius: 1,
      },
      {
        label: "Cape Verde",
        data: tasks,
        backgroundColor: "rgb(0, 61, 165)",
        borderColor: "rgb(0, 61, 165)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Cape_Verde",
        },
        pointRadius: 1,
      },
      {
        label: "Central African Repuplic",
        data: tasks,
        backgroundColor: "rgb(210, 16, 52)",
        borderColor: "rgb(40, 151, 40)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Central_African_Republic",
        },
        pointRadius: 1,
      },
      {
        label: "Chad",
        data: tasks,
        backgroundColor: "rgb(0, 38, 100)",
        borderColor: "rgb(254, 203, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Chad",
        },
        pointRadius: 1,
      },
      {
        label: "Chile",
        data: tasks,
        backgroundColor: "rgb(218, 41, 28)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Chile",
        },
        pointRadius: 1,
      },
      {
        label: "China",
        data: tasks,
        backgroundColor: "rgb(238, 28, 37)",
        borderColor: "rgb(238, 28, 37)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "China",
        },
        pointRadius: 1,
      },
      {
        label: "Colombia",
        data: tasks,
        backgroundColor: "rgb(255, 205, 0)",
        borderColor: "rgb(0, 48, 135)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Colombia",
        },
        pointRadius: 1,
      },
      {
        label: "Comoros",
        data: tasks,
        backgroundColor: "rgb(0, 151, 57)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Comoros",
        },
        pointRadius: 1,
      },
      {
        label: "Congo",
        data: tasks,
        backgroundColor: "rgb(0, 149, 67)",
        borderColor: "rgb(220, 36, 31)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Congo",
        },
        pointRadius: 1,
      },
      {
        label: "Cook Islands",
        data: tasks,
        backgroundColor: "rgb(0, 32, 91)",
        borderColor: "rgb(0, 32, 91)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Cook_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Costa Rica",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(0, 32, 91)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Costa_Rica",
        },
        pointRadius: 1,
      },
      {
        label: "Côte d'Ivoire",
        data: tasks,
        backgroundColor: "rgb(255, 130, 0)",
        borderColor: "rgb(0, 154, 68)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Côte_dIvoire",
        },
        pointRadius: 1,
      },
      {
        label: "Croatia",
        data: tasks,
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Croatia",
        },
        pointRadius: 1,
      },
      {
        label: "Cuba",
        data: tasks,
        backgroundColor: "rgb(0, 75, 135)",
        borderColor: "rgb(218, 41, 28)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Cuba",
        },
        pointRadius: 1,
      },
      {
        label: "Curaçao",
        data: tasks,
        backgroundColor: "rgb(0, 43, 127)",
        borderColor: "rgb(0, 43, 127)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Curaçao",
        },
        pointRadius: 1,
      },
      {
        label: "Cyprus",
        data: tasks,
        backgroundColor: "rgb(213, 120, 0)",
        borderColor: "rgb(213, 120, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Cyprus",
        },
        pointRadius: 1,
      },
      {
        label: "Czech Repuplic",
        data: tasks,
        backgroundColor: "rgb(17, 69, 126)",
        borderColor: "rgb(215, 20, 26)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Czech_Republic",
        },
        pointRadius: 1,
      },
      {
        label: "North Korea",
        data: tasks,
        backgroundColor: "rgb(237, 28, 39)",
        borderColor: "rgb(2, 79, 162)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "North_Korea",
        },
        pointRadius: 1,
      },
      {
        label: "Democratic Republic of the Congo",
        data: tasks,
        backgroundColor: "rgb(0, 133, 202)",
        borderColor: "rgb(0, 133, 202)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Democratic_Republic_of_the_Congo",
        },
        pointRadius: 1,
      },
      {
        label: "Denmark",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Denmark",
        },
        pointRadius: 1,
      },
      {
        label: "Djibouti",
        data: tasks,
        backgroundColor: "rgb(106, 178, 231)",
        borderColor: "rgb(18, 173, 43)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Djibouti",
        },
        pointRadius: 1,
      },
      {
        label: "Dominica",
        data: tasks,
        backgroundColor: "rgb(0, 154, 68)",
        borderColor: "rgb(0, 154, 68)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Dominica",
        },
        pointRadius: 1,
      },
      {
        label: "Dominican Repuplic",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(0, 45, 98)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Dominican_Republic",
        },
        pointRadius: 1,
      },
      {
        label: "Ecuador",
        data: tasks,
        backgroundColor: "rgb(255, 209, 0)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Ecuador",
        },
        pointRadius: 1,
      },
      {
        label: "Egypt",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Egypt",
        },
        pointRadius: 1,
      },
      {
        label: "El Salvador",
        data: tasks,
        backgroundColor: "rgb(0, 71, 171)",
        borderColor: "rgb(0, 71, 171)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "El_Salvador",
        },
        pointRadius: 1,
      },
      {
        label: "Equatorial Guinea",
        data: tasks,
        backgroundColor: "rgb(62, 154, 0)",
        borderColor: "rgb(227, 33, 24)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Equatorial_Guinea",
        },
        pointRadius: 1,
      },
      {
        label: "Eritrea",
        data: tasks,
        backgroundColor: "rgb(67, 176, 42)",
        borderColor: "rgb(228, 0, 43)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Eritrea",
        },
        pointRadius: 1,
      },
      {
        label: "Estonia",
        data: tasks,
        backgroundColor: "rgb(0, 114, 206)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Estonia",
        },
        pointRadius: 1,
      },
      {
        label: "Ethiopia",
        data: tasks,
        backgroundColor: "rgb(0, 154, 68)",
        borderColor: "rgb(254, 221, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Ethiopia",
        },
        pointRadius: 1,
      },
      {
        label: "Faroe Islands",
        data: tasks,
        backgroundColor: "rgb(237, 41, 57)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Faeroe_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Micronesia",
        data: tasks,
        backgroundColor: "rgb(171, 202, 233)",
        borderColor: "rgb(171, 202, 233)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Micronesia_Federated_States_of",
        },
        pointRadius: 1,
      },
      {
        label: "Fiji",
        data: tasks,
        backgroundColor: "rgb(105, 179, 231)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Fiji",
        },
        pointRadius: 1,
      },
      {
        label: "Finland",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 47, 108)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Finland",
        },
        pointRadius: 1,
      },
      {
        label: "France",
        data: tasks,
        backgroundColor: "rgb(0, 38, 84)",
        borderColor: "rgb(0, 38, 84)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "France",
        },
        pointRadius: 1,
      },
      {
        label: "French Guiana",
        data: tasks,
        backgroundColor: "rgb(0, 38, 84)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "French_Guiana",
        },
        pointRadius: 1,
      },
      {
        label: "French Polynesia",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(206, 17, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "French_Polynesia",
        },
        pointRadius: 1,
      },
      {
        label: "Gabon",
        data: tasks,
        backgroundColor: "rgb(252, 209, 22)",
        borderColor: "rgb(0, 158, 96)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Gabon",
        },
        pointRadius: 1,
      },
      {
        label: "Gambia",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(58, 119, 40)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Gambia",
        },
        pointRadius: 1,
      },
      {
        label: "Georgia",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(218, 41, 28)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Georgia",
        },
        pointRadius: 1,
      },
      {
        label: "Germany",
        data: tasks,
        backgroundColor: "rgb(221, 0, 0)",
        borderColor: "rgb(255, 204, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Germany",
        },
        pointRadius: 1,
      },
      {
        label: "Ghana",
        data: tasks,
        backgroundColor: "rgb(255, 209, 0)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Ghana",
        },
        pointRadius: 1,
      },
      {
        label: "Greece",
        data: tasks,
        backgroundColor: "rgb(0, 20, 137)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Greece",
        },
        pointRadius: 1,
      },
      {
        label: "Greenland",
        data: tasks,
        backgroundColor: "rgb(208, 12, 51)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Greenland",
        },
        pointRadius: 1,
      },
      {
        label: "Grenada",
        data: tasks,
        backgroundColor: "rgb(0, 151, 57)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Grenada",
        },
        pointRadius: 1,
      },
      {
        label: "Guadeloupe",
        data: tasks,
        backgroundColor: "rgb(0, 166, 80)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Guadeloupe",
        },
        pointRadius: 1,
      },
      {
        label: "Guatemala",
        data: tasks,
        backgroundColor: "rgb(73, 151, 208)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Guatemala",
        },
        pointRadius: 1,
      },
      {
        label: "Guinea",
        data: tasks,
        backgroundColor: "rgb(252, 209, 22)",
        borderColor: "rgb(0, 148, 96)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Guinea",
        },
        pointRadius: 1,
      },
      {
        label: "Guinea-Bissau",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(0, 151, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "GuineaBissau",
        },
        pointRadius: 1,
      },
      {
        label: "Guyana",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(255, 209, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Guyana",
        },
        pointRadius: 1,
      },
      {
        label: "Haiti",
        data: tasks,
        backgroundColor: "rgb(0, 32, 159)",
        borderColor: "rgb(210, 16, 52)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Haiti",
        },
        pointRadius: 1,
      },
      {
        label: "Honduras",
        data: tasks,
        backgroundColor: "rgb(0, 188, 228)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Honduras",
        },
        pointRadius: 1,
      },
      {
        label: "Hong Kong",
        data: tasks,
        backgroundColor: "rgb(222, 41, 16)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Hong_Kong",
        },
        pointRadius: 1,
      },
      {
        label: "Hungary",
        data: tasks,
        backgroundColor: "rgb(71, 112, 80)",
        borderColor: "rgb(206, 41, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Hungary",
        },
        pointRadius: 1,
      },
      {
        label: "Iceland",
        data: tasks,
        backgroundColor: "rgb(220, 30, 53)",
        borderColor: "rgb(2, 82, 156)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Iceland",
        },
        pointRadius: 1,
      },
      {
        label: "India",
        data: tasks,
        backgroundColor: "rgb(4, 106, 56)",
        borderColor: "rgb(255, 103, 31)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "India",
        },
        pointRadius: 1,
      },
      {
        label: "Indonesia",
        data: tasks,
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Indonesia",
        },
        pointRadius: 1,
      },
      {
        label: "Iraq",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Iraq",
        },
        pointRadius: 1,
      },
      {
        label: "Ireland",
        data: tasks,
        backgroundColor: "rgb(0, 154, 68)",
        borderColor: "rgb(255, 130, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Ireland",
        },
        pointRadius: 1,
      },
      {
        label: "Iran",
        data: tasks,
        backgroundColor: "rgb(218, 0, 0)",
        borderColor: "rgb(35, 159, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Iran",
        },
        pointRadius: 1,
      },
      {
        label: "Israel",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 94, 184)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Israel",
        },
        pointRadius: 1,
      },
      {
        label: "Italy",
        data: tasks,
        backgroundColor: "rgb(0, 140, 69)",
        borderColor: "rgb(0, 140, 69)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Italy",
        },
        pointRadius: 1,
      },
      {
        label: "Jamaica",
        data: tasks,
        backgroundColor: "rgb(254, 209, 0)",
        borderColor: "rgb(0, 155, 58)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Jamaica",
        },
        pointRadius: 1,
      },
      {
        label: "Japan",
        data: tasks,
        backgroundColor: "rgb(188, 0, 45)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Japan",
        },
        pointRadius: 1,
      },
      {
        label: "Jordan",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(0, 122, 61)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Jordan",
        },
        pointRadius: 1,
      },
      {
        label: "Kazakhstan",
        data: tasks,
        backgroundColor: "rgb(0, 175, 202)",
        borderColor: "rgb(0, 175, 202)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Kazakhstan",
        },
        pointRadius: 1,
      },
      {
        label: "Kenya",
        data: tasks,
        backgroundColor: "rgb(187, 0, 0)",
        borderColor: "rgb(0, 102, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Kenya",
        },
        pointRadius: 1,
      },
      {
        label: "Kiribati",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(0, 50, 160)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Kiribati",
        },
        pointRadius: 1,
      },
      {
        label: "Kosovo",
        data: tasks,
        backgroundColor: "rgb(208, 166, 80)",
        borderColor: "rgb(36, 74, 165)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Kosovo",
        },
        pointRadius: 1,
      },
      {
        label: "Kuwait",
        data: tasks,
        backgroundColor: "rgb(0, 122, 61)",
        borderColor: "rgb(206, 17, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Kuwait",
        },
        pointRadius: 1,
      },
      {
        label: "Kyrgyzstan",
        data: tasks,
        backgroundColor: "rgb(239, 51, 64)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Kyrgyzstan",
        },
        pointRadius: 1,
      },
      {
        label: "Laos",
        data: tasks,
        backgroundColor: "rgb(0, 40, 104)",
        borderColor: "rgb(206, 17, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Laos",
        },
        pointRadius: 1,
      },
      {
        label: "Latvia",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(164, 52, 58)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Latvia",
        },
        pointRadius: 1,
      },
      {
        label: "Lebanon",
        data: tasks,
        backgroundColor: "rgb(0, 166, 81)",
        borderColor: "rgb(237, 28, 36)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Lebanon",
        },
        pointRadius: 1,
      },
      {
        label: "Lesotho",
        data: tasks,
        backgroundColor: "rgb(0, 20, 137)",
        borderColor: "rgb(0, 154, 68)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Lesotho",
        },
        pointRadius: 1,
      },
      {
        label: "Liberia",
        data: tasks,
        backgroundColor: "rgb(0, 32, 91)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Liberia",
        },
        pointRadius: 1,
      },
      {
        label: "Libya",
        data: tasks,
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(35, 158, 70)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Libya",
        },
        pointRadius: 1,
      },
      {
        label: "Liechtenstein",
        data: tasks,
        backgroundColor: "rgb(228, 0, 43)",
        borderColor: "rgb(0, 61, 165)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Liechtenstein",
        },
        pointRadius: 1,
      },
      {
        label: "Lithuania",
        data: tasks,
        backgroundColor: "rgb(4, 106, 56)",
        borderColor: "rgb(255, 184, 28)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Lithuania",
        },
        pointRadius: 1,
      },
      {
        label: "Luxembourg",
        data: tasks,
        backgroundColor: "rgb(81, 173, 218)",
        borderColor: "rgb(234, 20, 29)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Luxembourg",
        },
        pointRadius: 1,
      },
      {
        label: "Macao",
        data: tasks,
        backgroundColor: "rgb(7, 118, 98)",
        borderColor: "rgb(7, 118, 98)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Macao",
        },
        pointRadius: 1,
      },
      {
        label: "North Macedonia",
        data: tasks,
        backgroundColor: "rgb(216, 33, 38)",
        borderColor: "rgb(248, 233, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "North_Macedonia",
        },
        pointRadius: 1,
      },
      {
        label: "Madagascar",
        data: tasks,
        backgroundColor: "rgb(0, 132, 61)",
        borderColor: "rgb( 	249, 66, 58)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Madagascar",
        },
        pointRadius: 1,
      },
      {
        label: "Malawi",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Malawi",
        },
        pointRadius: 1,
      },
      {
        label: "Maldives",
        data: tasks,
        backgroundColor: "rgb(0, 132, 61)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Maldives",
        },
        pointRadius: 1,
      },
      {
        label: "Mali",
        data: tasks,
        backgroundColor: "rgb(20, 181, 58)",
        borderColor: "rgb(252, 209, 22)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mali",
        },
        pointRadius: 1,
      },
      {
        label: "Malta",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(192, 27, 34)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Malta",
        },
        pointRadius: 1,
      },
      {
        label: "Marshall Islands",
        data: tasks,
        backgroundColor: "rgb(0, 48, 135)",
        borderColor: "rgb(0, 48, 135)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Marshall_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Martinique",
        data: tasks,
        backgroundColor: "rgb(12, 69, 86)",
        borderColor: "rgb(241, 145, 33)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Martinique",
        },
        pointRadius: 1,
      },
      {
        label: "Mauritania",
        data: tasks,
        backgroundColor: "rgb(0, 169, 92)",
        borderColor: "rgb(208, 28, 31)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mauritania",
        },
        pointRadius: 1,
      },
      {
        label: "Mauritius",
        data: tasks,
        backgroundColor: "rgb(26, 32, 109)",
        borderColor: "rgb(234, 40, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mauritius",
        },
        pointRadius: 1,
      },
      {
        label: "Mayotte",
        data: tasks,
        backgroundColor: "rgb(0, 35, 149)",
        borderColor: "rgb(237, 41, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mayotte",
        },
        pointRadius: 1,
      },
      {
        label: "Mexico",
        data: tasks,
        backgroundColor: "rgb(0, 99, 65)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mexico",
        },
        pointRadius: 1,
      },
      {
        label: "Mongolia",
        data: tasks,
        backgroundColor: "rgb(0, 102, 179)",
        borderColor: "rgb(218, 32, 50)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mongolia",
        },
        pointRadius: 1,
      },
      {
        label: "Montenegro",
        data: tasks,
        backgroundColor: "rgb(196, 3, 8)",
        borderColor: "rgb(212, 175, 58)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Montenegro",
        },
        pointRadius: 1,
      },
      {
        label: "Montserrat",
        data: tasks,
        backgroundColor: "rgb(1, 33, 105)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Montserrat",
        },
        pointRadius: 1,
      },
      {
        label: "Morocco",
        data: tasks,
        backgroundColor: "rgb(193, 39, 45)",
        borderColor: "rgb(0, 98, 51)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Morocco",
        },
        pointRadius: 1,
      },
      {
        label: "Mozambique",
        data: tasks,
        backgroundColor: "rgb(0, 151, 57)",
        borderColor: "rgb(255, 209, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Mozambique",
        },
        pointRadius: 1,
      },
      {
        label: "Myanmar",
        data: tasks,
        backgroundColor: "rgb(67, 176, 42)",
        borderColor: "rgb(238, 39, 55)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Myanmar",
        },
        pointRadius: 1,
      },
      {
        label: "Namibia",
        data: tasks,
        backgroundColor: "rgb(0, 20, 137)",
        borderColor: "rgb(218, 41, 28)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Namibia",
        },
        pointRadius: 1,
      },
      {
        label: "Nauru",
        data: tasks,
        backgroundColor: "rgb(1, 33, 105)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Nauru",
        },
        pointRadius: 1,
      },
      {
        label: "Nepal",
        data: tasks,
        backgroundColor: "rgb(220, 20, 60)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Nepal",
        },
        pointRadius: 1,
      },
      {
        label: "Netherlands",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(0, 61, 165)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Netherlands",
        },
        pointRadius: 1,
      },
      {
        label: "New Caledonia",
        data: tasks,
        backgroundColor: "rgb(0, 35, 149)",
        borderColor: "rgb(237, 41, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "New_Caledonia",
        },
        pointRadius: 1,
      },
      {
        label: "New Zealand",
        data: tasks,
        backgroundColor: "rgb(1, 33, 105)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "New_Zealand",
        },
        pointRadius: 1,
      },
      {
        label: "Nicaragua",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(0, 103, 198)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Nicaragua",
        },
        pointRadius: 1,
      },
      {
        label: "Niger",
        data: tasks,
        backgroundColor: "rgb(224, 82, 6)",
        borderColor: "rgb(13, 176, 43)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Niger",
        },
        pointRadius: 1,
      },
      {
        label: "Nigeria",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(27, 115, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Nigeria",
        },
        pointRadius: 1,
      },
      {
        label: "Niue",
        data: tasks,
        backgroundColor: "rgb(254, 221, 0)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Niue",
        },
        pointRadius: 1,
      },
      {
        label: "Norway",
        data: tasks,
        backgroundColor: "rgb(0, 32, 91)",
        borderColor: "rgb(186, 12, 47)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Norway",
        },
        pointRadius: 1,
      },
      {
        label: "Occupied Palestinian Territory",
        data: tasks,
        backgroundColor: "rgb(228, 49, 43)",
        borderColor: "rgb(20, 153, 84)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Occupied_Palestinian_Territory",
        },
        pointRadius: 1,
      },
      {
        label: "Oman",
        data: tasks,
        backgroundColor: "rgb(227, 10, 23)",
        borderColor: "rgb(0, 128, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Oman",
        },
        pointRadius: 1,
      },
      {
        label: "Pakistan",
        data: tasks,
        backgroundColor: "rgb(17, 87, 64)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Pakistan",
        },
        pointRadius: 1,
      },
      {
        label: "Palau",
        data: tasks,
        backgroundColor: "rgb(255, 209, 0)",
        borderColor: "rgb(0, 133, 202)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Palau",
        },
        pointRadius: 1,
      },
      {
        label: "Panama",
        data: tasks,
        backgroundColor: "rgb(7, 35, 87)",
        borderColor: "rgb(218, 18, 26)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Panama",
        },
        pointRadius: 1,
      },
      {
        label: "Papua New  Guinea",
        data: tasks,
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Papua_New_Guinea",
        },
        pointRadius: 1,
      },
      {
        label: "Paraguay",
        data: tasks,
        backgroundColor: "rgb(0, 56, 168)",
        borderColor: "rgb(213, 43, 30)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Paraguay",
        },
        pointRadius: 1,
      },
      {
        label: "Peru",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Peru",
        },
        pointRadius: 1,
      },
      {
        label: "Philippines",
        data: tasks,
        backgroundColor: "rgb(191, 13, 62)",
        borderColor: "rgb(0, 50, 160)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Philippines",
        },
        pointRadius: 1,
      },
      {
        label: "Bolivia",
        data: tasks,
        backgroundColor: "rgb(248, 230, 0)",
        borderColor: "rgb(0, 122, 51)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Bolivia",
        },
        pointRadius: 1,
      },
      {
        label: "Poland",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(220, 20, 60)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Poland",
        },
        pointRadius: 1,
      },
      {
        label: "Portugal",
        data: tasks,
        backgroundColor: "rgb(218, 41, 28)",
        borderColor: "rgb(4, 106, 56)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Portugal",
        },
        pointRadius: 1,
      },
      {
        label: "Qatar",
        data: tasks,
        backgroundColor: "rgb(138, 21, 56)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Qatar",
        },
        pointRadius: 1,
      },
      {
        label: "Cameroon",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(252, 209, 22)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Cameroon",
        },
        pointRadius: 1,
      },
      {
        label: "South Korea",
        data: tasks,
        backgroundColor: "rgb(15, 100, 205)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "South_Korea",
        },
        pointRadius: 1,
      },
      {
        label: "Moldova",
        data: tasks,
        backgroundColor: "rgb(255, 209, 0)",
        borderColor: "rgb(0, 61, 165)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Moldova",
        },
        pointRadius: 1,
      },
      {
        label: "South Sudan",
        data: tasks,
        backgroundColor: "rgb(15, 71, 255)",
        borderColor: "rgb(7, 137, 48)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "South_Sudan",
        },
        pointRadius: 1,
      },
      {
        label: "Sudan",
        data: tasks,
        backgroundColor: "rgb(0, 114, 41)",
        borderColor: "rgb(210, 16, 52)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Sudan",
        },
        pointRadius: 1,
      },
      {
        label: "Réunion",
        data: tasks,
        backgroundColor: "rgb(47, 102, 255)",
        borderColor: "rgb(246, 1, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Réunion",
        },
        pointRadius: 1,
      },
      {
        label: "Romania",
        data: tasks,
        backgroundColor: "rgb(0, 43, 127)",
        borderColor: "rgb(206, 17, 38)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Romania",
        },
        pointRadius: 1,
      },
      {
        label: "Russian Federation",
        data: tasks,
        backgroundColor: "rgb(228, 24, 28)",
        borderColor: "rgb(28, 53, 120)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Russian_Federation",
        },
        pointRadius: 1,
      },
      {
        label: "Rwanda",
        data: tasks,
        backgroundColor: "rgb(0, 161, 222)",
        borderColor: "rgb(229, 190, 1)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Rwanda",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Helena",
        data: tasks,
        backgroundColor: "rgb(1, 33, 105)",
        borderColor: "rgb( 	200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Saint_Helena",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Lucia",
        data: tasks,
        backgroundColor: "rgb(0, 119, 200)",
        borderColor: "rgb(255, 209, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Saint_Lucia",
        },
        pointRadius: 1,
      },
      {
        label: "Sint Maarten (Dutch part)",
        data: tasks,
        backgroundColor: "rgb(0, 38, 136)",
        borderColor: "rgb(249, 218, 6)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Sint_Maarten_Dutch_part",
        },
        pointRadius: 1,
      },
      {
        label: "Samoa",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(0, 43, 127)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Samoa",
        },
        pointRadius: 1,
      },
      {
        label: "Sao Tome and Principe",
        data: tasks,
        backgroundColor: "rgb(255, 209, 0)",
        borderColor: "rgb(0, 151, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Sao_Tome_and_Principe",
        },
        pointRadius: 1,
      },
      {
        label: "Saudi Arabia",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb( 	22, 93, 49)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Saudi_Arabia",
        },
        pointRadius: 1,
      },
      {
        label: "Senegal",
        data: tasks,
        backgroundColor: "rgb(0, 133, 63)",
        borderColor: "rgb(253, 239, 66)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Senegal",
        },
        pointRadius: 1,
      },
      {
        label: "Serbia",
        data: tasks,
        backgroundColor: "rgb(198, 54, 60)",
        borderColor: "rgb(12, 64, 118)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Serbia",
        },
        pointRadius: 1,
      },
      {
        label: "Seychelles",
        data: tasks,
        backgroundColor: "rgb(0, 47, 108)",
        borderColor: "rgb(254, 209, 65)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Seychelles",
        },
        pointRadius: 1,
      },
      {
        label: "Sierra Leone",
        data: tasks,
        backgroundColor: "rgb(30, 181, 58)",
        borderColor: "rgb(0, 114, 198)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Sierra_Leone",
        },
        pointRadius: 1,
      },
      {
        label: "Singapore",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(199, 59, 60)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Singapore",
        },
        pointRadius: 1,
      },
      {
        label: "Slovakia",
        data: tasks,
        backgroundColor: "rgb(238, 28, 37)",
        borderColor: "rgb(11, 78, 162)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Slovakia",
        },
        pointRadius: 1,
      },
      {
        label: "Slovenia",
        data: tasks,
        backgroundColor: "rgb(0, 61, 165)",
        borderColor: "rgb(255, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Slovenia",
        },
        pointRadius: 1,
      },
      {
        label: "Solomon Islands",
        data: tasks,
        backgroundColor: "rgb(0, 81, 186)",
        borderColor: "rgb(33, 91, 51)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Solomon_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Somalia",
        data: tasks,
        backgroundColor: "rgb(65, 137, 221)",
        borderColor: "rgb(65, 137, 221)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Somalia",
        },
        pointRadius: 1,
      },
      {
        label: "South Africa",
        data: tasks,
        backgroundColor: "rgb(0, 119, 73)",
        borderColor: "rgb(60, 20, 137)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "South_Africa",
        },
        pointRadius: 1,
      },
      {
        label: "Spain",
        data: tasks,
        backgroundColor: "rgb(241, 191, 0)",
        borderColor: "rgb(170, 21, 27)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Spain",
        },
        pointRadius: 1,
      },
      {
        label: "Sri Lanka",
        data: tasks,
        backgroundColor: "rgb(141, 21, 58)",
        borderColor: "rgb(255, 190, 41)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Sri_Lanka",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Kitts and Nevis",
        data: tasks,
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Saint_Kitts_and_Nevis",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Pierre and Miquelon",
        data: tasks,
        backgroundColor: "rgb(255, 207, 0)",
        borderColor: "rgb(0, 146, 200)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Saint_Pierre_and_Miquelon",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Vincent and the Grenadines",
        data: tasks,
        backgroundColor: "rgb(252, 208, 34)",
        borderColor: "rgb(0, 124, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Saint_Vincent_and_the_Grenadines",
        },
        pointRadius: 1,
      },
      {
        label: "Suriname",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(0, 122, 51)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Suriname",
        },
        pointRadius: 1,
      },
      {
        label: "Swaziland",
        data: tasks,
        backgroundColor: "rgb(177, 12, 12)",
        borderColor: "rgb(62, 94, 185)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Swaziland",
        },
        pointRadius: 1,
      },
      {
        label: "Sweden",
        data: tasks,
        backgroundColor: "rgb(254, 204, 2)",
        borderColor: "rgb(0, 106, 167)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Sweden",
        },
        pointRadius: 1,
      },
      {
        label: "Switzerland",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(218, 41, 28)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Switzerland",
        },
        pointRadius: 1,
      },
      {
        label: "Syria",
        data: tasks,
        backgroundColor: "rgb(206, 17, 38)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Syria",
        },
        pointRadius: 1,
      },
      {
        label: "Taiwan",
        data: tasks,
        backgroundColor: "rgb(254, 0, 0)",
        borderColor: "rgb(0, 0, 149)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Taiwan",
        },
        pointRadius: 1,
      },
      {
        label: "Tajikistan",
        data: tasks,
        backgroundColor: "rgb(204, 0, 0)",
        borderColor: "rgb(0, 102, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Tajikistan",
        },
        pointRadius: 1,
      },
      {
        label: "Thailand",
        data: tasks,
        backgroundColor: "rgb(0, 36, 125)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Thailand",
        },
        pointRadius: 1,
      },
      {
        label: "Timor-Leste",
        data: tasks,
        backgroundColor: "rgb(218, 41, 28)",
        borderColor: "rgb(0, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TimorLeste",
        },
        pointRadius: 1,
      },
      {
        label: "Togo",
        data: tasks,
        backgroundColor: "rgb(0, 106, 74)",
        borderColor: "rgb(255, 206, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Togo",
        },
        pointRadius: 1,
      },
      {
        label: "Tonga",
        data: tasks,
        backgroundColor: "rgb(193, 0, 0)",
        borderColor: "rgb(193, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Tonga",
        },
        pointRadius: 1,
      },
      {
        label: "Trinidad and Tobago",
        data: tasks,
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Trinidad_and_Tobago",
        },
        pointRadius: 1,
      },
      {
        label: "Tunisia",
        data: tasks,
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Tunisia",
        },
        pointRadius: 1,
      },
      {
        label: "Turkey",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(200, 16, 46)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Turkey",
        },
        pointRadius: 1,
      },
      {
        label: "Turkmenistan",
        data: tasks,
        backgroundColor: "rgb(0, 151, 57)",
        borderColor: "rgb(0, 151, 57)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Turkmenistan",
        },
        pointRadius: 1,
      },
      {
        label: "Turks and Caicos Islands",
        data: tasks,
        backgroundColor: "rgb(0, 40, 104)",
        borderColor: "rgb(252, 209, 22)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Turks_and_Caicos_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Tuvalu",
        data: tasks,
        backgroundColor: "rgb(65, 143, 222)",
        borderColor: "rgb(1, 33, 105)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Tuvalu",
        },
        pointRadius: 1,
      },
      {
        label: "Uganda",
        data: tasks,
        backgroundColor: "rgb(252, 220, 4)",
        borderColor: "rgb(217, 0, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Uganda",
        },
        pointRadius: 1,
      },
      {
        label: "Ukraine",
        data: tasks,
        backgroundColor: "rgb(0, 87, 183)",
        borderColor: "rgb(255, 221, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Ukraine",
        },
        pointRadius: 1,
      },
      {
        label: "United Arab Emirates",
        data: tasks,
        backgroundColor: "rgb(0, 151, 57)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "United_Arab_Emirates",
        },
        pointRadius: 1,
      },
      {
        label: "United Kingdom",
        data: tasks,
        backgroundColor: "rgb(200, 16, 46)",
        borderColor: "rgb(255, 255, 255)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "United_Kingdom",
        },
        pointRadius: 1,
      },
      {
        label: "Tanzania",
        data: tasks,
        backgroundColor: "rgb(0, 163, 221)",
        borderColor: "rgb(30, 181, 58)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Tanzania",
        },
        pointRadius: 1,
      },
      {
        label: "USA",
        data: tasks,
        backgroundColor: "rgb(10, 49, 97)",
        borderColor: "rgb(10, 49, 97)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "USA",
        },
        pointRadius: 1,
      },
      {
        label: "Uruguay",
        data: tasks,
        backgroundColor: "rgb(0, 20, 137)",
        borderColor: "rgba(255, 205, 0)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Uruguay",
        },
        pointRadius: 1,
      },
      {
        label: "Uzbekistan",
        data: tasks,
        backgroundColor: "rgb(67, 176, 42)",
        borderColor: "rgb(0, 114, 206)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Uzbekistan",
        },
        pointRadius: 1,
      },
      {
        label: "Vanuatu",
        data: tasks,
        backgroundColor: "rgb(192, 16, 46)",
        borderColor: "rgba(0, 154, 68)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Vanuatu",
        },
        pointRadius: 1,
      },
      {
        label: "Venezuela",
        data: tasks,
        backgroundColor: "rgb(252, 227, 0)",
        borderColor: "rgb(239, 51, 64)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Venezuela",
        },
        pointRadius: 1,
      },
      {
        label: "Viet Nam",
        data: tasks,
        backgroundColor: "rgba(200, 16, 46, 0.8)",
        borderColor: "rgba(255, 205, 0, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Viet_Nam",
        },
        pointRadius: 1,
      },
      {
        label: "Wallis and Futuna Islands",
        data: tasks,
        backgroundColor: "rgba(237, 41, 57, 0.8)",
        borderColor: "rgba(237, 41, 57, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Wallis_and_Futuna_Islands",
        },
        pointRadius: 1,
      },
      {
        label: "Yemen",
        data: tasks,
        backgroundColor: "rgba(206, 17, 38, 0.8)",
        borderColor: "rgba(0, 0, 0, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Yemen",
        },
        pointRadius: 1,
      },
      {
        label: "Zambia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        borderColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Zambia",
        },
        pointRadius: 1,
      },
      {
        label: "Zimbabwe",
        data: tasks,
        backgroundColor: "rgba(25, 138, 0, 0.8)",
        borderColor: "rgba(25, 138, 0, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Zimbabwe",
        },
        pointRadius: 1,
      },
      
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "V7",
      },
    },

    scales: {
      y: {
        type: "linear",
        position: "left",
        title: {
            display: true,
            color: "red",
            text: 'Million tonnes of CO2'
          }
      },
     
      x: {
        type: "linear",
        position: "bottom",
        min: 1959,
        max: 2020,
        title: {
            display: true,
            color: "red",
            text: 'Year'
          },
      },
    },
  };

  return (
    <div className={GraphCSS.container}>
      <Line options={options} data={data} />
      <p>
      Fossil CO2 emissions by country (territorial) by 1 million tonnes of CO2 from 1959-2020
      </p>
      <h1><a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Link to data sources.</a></h1>
      <h1><a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Full details.</a></h1>
    </div>
  );
}

export default V8;