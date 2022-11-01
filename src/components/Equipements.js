export default function Equipments({equipments}) {
    return <ul>{equipments.map((el, index) => (
              <li className="equipements" key={`${el}-${index}`}>{el}</li>
              ))}     
            </ul>;
};
  
