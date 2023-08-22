//------------------------------------//
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Definir la interfaz para los elementos en RESPUESTA_1
interface RespuestaItem {
  username: string;
  date: number;
  name: string;
  duration: number;
  color_code: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RESPUESTA_1: RespuestaItem[] = [
  {
    username: "Quim",
    date: -1,
    name: "Libre",
    duration: 6,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -1,
    name: "Trabajo",
    duration: 1,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -1,
    name: "Ocio",
    duration: 14,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -1,
    name: "Ocio",
    duration: 12,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -1,
    name: "Deporte",
    duration: 5,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -2,
    name: "Libre",
    duration: 7,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -2,
    name: "Trabajo",
    duration: 3,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -2,
    name: "Ocio",
    duration: 15,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -2,
    name: "Deporte",
    duration: 4,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -3,
    name: "Libre",
    duration: 8,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -3,
    name: "Trabajo",
    duration: 5,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -3,
    name: "Ocio",
    duration: 10,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -3,
    name: "Deporte",
    duration: 3,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -4,
    name: "Libre",
    duration: 5,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -4,
    name: "Trabajo",
    duration: 6,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -4,
    name: "Ocio",
    duration: 9,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -4,
    name: "Deporte",
    duration: 6,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -5,
    name: "Libre",
    duration: 9,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -5,
    name: "Trabajo",
    duration: 7,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -5,
    name: "Ocio",
    duration: 11,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -5,
    name: "Deporte",
    duration: 2,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -6,
    name: "Libre",
    duration: 3,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -6,
    name: "Trabajo",
    duration: 8,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -6,
    name: "Ocio",
    duration: 8,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -6,
    name: "Deporte",
    duration: 7,
    color_code: "#66aaf9",
  },
  {
    username: "Quim",
    date: -7,
    name: "Libre",
    duration: 2,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    date: -7,
    name: "Trabajo",
    duration: 6,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    date: -7,
    name: "Ocio",
    duration: 15,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    date: -7,
    name: "Deporte",
    duration: 3,
    color_code: "#66aaf9",
  },
];

//------------------------------------//

// para el grafico de BARRAS
let resultado: RespuestaItem[] = RESPUESTA_1.reduce(function (
  acumulador,
  elemento
) {
  let elementoExistente = acumulador.find(function (item) {
    return item.date === elemento.date && item.name === elemento.name;
  });

  if (elementoExistente) {
    elementoExistente.duration += elemento.duration;
  } else {
    acumulador.push(elemento);
  }

  return acumulador;
},
[]);

//------------------------------------//

// Obtener un objeto con días únicos
const diasUnicos: number[] = [...new Set(resultado.map((item) => item.date))];

// Preparar un objeto para los datos del gráfico
export const data = {
  labels: diasUnicos.map((date) => `Día ${date}`),
  datasets: resultado.reduce((datasets, item) => {
    const datasetIndex = datasets.findIndex((ds) => ds.label === item.name);
    if (datasetIndex !== -1) {
      datasets[datasetIndex].data.push(item.duration);
      datasets[datasetIndex].backgroundColor.push(item.color_code);
    } else {
      datasets.push({
        label: item.name,
        data: [item.duration],
        backgroundColor: [item.color_code],
      });
    }
    return datasets;
  }, [] as { label: string; data: number[]; backgroundColor: string[] }[]),
};

// Configuración del gráfico
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: undefined,
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: undefined, // Cambiar color del eje Y
      },
      grid: {
        /* color: "#000" // Cambiar color de la grilla */
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 24,

      ticks: {
        stepSize: 6,
        color: undefined, // Cambiar color del eje Y
      },
      grid: {
        /* color: "#000" // Cambiar color de la grilla */
      },
    },
  },
};

function GraficoBarras() {
  return (
    <div>
      <Bar options={options} data={data} height={340} />
    </div>
  );
}

export default GraficoBarras;
