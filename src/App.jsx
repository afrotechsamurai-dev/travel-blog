import Header from "./components/Header";
import Card from "./components/Card";
import localData from "./data";





export default function App() {
  const cardElement = localData.map((local) => {
    return <Card image={local.img.src} 
                  alt={local.img.alt}
                  date={local.dates}
                  text={local.text}
                  map={local.googleMapsLink}
                  title={local.title}/>
  } )
  return (
    <>
    <Header />
    {cardElement}
    </>
)
}