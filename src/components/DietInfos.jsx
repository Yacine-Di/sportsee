import '../style/DietInfos.css'
import caloriesIcon from '../assets/calories-icon.png'
import carbsIcon from '../assets/carbs-icon.png'
import proteinIcon from '../assets/protein-icon.png'
import lipideIcon from '../assets/fat-icon.png'

function DietInfos({ dietInfoValue, categorie }) {
    const categories = ['Calories', 'Proteines', 'Glucides', 'Lipides']
    const icons = [caloriesIcon, proteinIcon, carbsIcon, lipideIcon]

    dietInfoValue =
        categorie === 0
            ? `${(dietInfoValue / 1000).toFixed(3)}kCal`
            : `${dietInfoValue}g`

    return (
        <div className="diet-container">
            <img
                className="diet-icon"
                src={icons[categorie]}
                alt={categories[categorie]}
            />
            <div className="diet-categorie__value">
                <p className="diet-value">{dietInfoValue}</p>
                <p className="diet-categorie">{categories[categorie]}</p>
            </div>
        </div>
    )
}

export default DietInfos
