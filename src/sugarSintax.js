import { v4 as idGenerator } from "uuid";

const sugarSintax = () => {
  // console.log(idGenerator());
  // const date = { year: 2022, month: 6, day: 28, test: "this is a test" }; //object that we'll be using as an example
  // /* SPREAD OPERATOR  */
  // const spreadValues = { ...date, year: 2000 };
  // console.log(spreadValues);
  // /* DESTRUCTURING | REST -- DESTRUCTURACIÓN | RESTO */
  // const { year } = date;
  // console.log(date.year);
  // console.log(year);
  // const { month, ...rest } = date;
  // console.log(month);
  // console.log(rest);
  // /* DEEP MATCHING | ALIAS | RENAME WHEN DESTRUCTURING -- RENOMBRAR EN DESTRUCTURACIÓN */
  // console.log(idGenerator());
  // /* Structure: const { key_actual : key_nueva } = objeto_con_data */
  // const { year: año, month: mes, day: dia } = date;
  // console.log(año, mes, dia);
  // /* DEFAULT VALUES WHEN DESTRUCTURING -- VALORES POR DEFECTO EN DESTRUCTURACIÓN */
  // const { year = 2000, month = 1, day = 1, time = "00:00" } = date;
  // console.log(year, month, day, time);
  // /* TERNARY OPERATOR | OPERADOR TERNARIO */
  // let message = "";
  // message = date.year === 2022 ? "Es el año actual" : "No es 2022";
  // console.log(message);
  // /* DYNAMIC PROPERTIES | PROPIEDADES DINÁMICAS */
  // const dynamicProperties = {
  //   [`año_${year}`]: true,
  // };
  // console.log(dynamicProperties, dynamicProperties[`año_${year}`]);
};

export default sugarSintax;
