import UniversityForm from "@/components/UniversityForm/UniversityForm";
import NovaPostForm from "../components/NovaPostForm/NovaPostForm"


export default function Home() {
  const cities = [
    {id: 1, name: "Житомир"},
    {id: 2, name: "Бердичів"},
    {id: 3, name: "Вінниця"},
    {id: 7, name: "Севастополь"},
  ]

  const palettes = [
    {id:0, value: 816, label: "Палета 1"},
    {id:1, value: 612, label: "Палета 2"},
    {id:2, value: 408, label: "Палета 3"},
  ]

  const packages = [
    {id: 0, label: "Тип 1"},
    {id: 1, label: "Тип 2"},
    {id: 2, label: "Тип 3"},
    {id: 3, label: "Тип 4"},
    {id: 4, label: "Тип 5"},
  ]

  const returnTypes = [
    {id: 0, label: "Документи"},
    {id: 1, label: "Грошовий переказ"},
  ]

  return (
      <>
        <UniversityForm/>
        <NovaPostForm cities={cities} palettes={palettes} packages={packages} returnTypes={returnTypes} />
      </>
  );

}
