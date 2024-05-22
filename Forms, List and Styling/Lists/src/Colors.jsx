import Color from './Color'

function Colors({objectArray}) {

  return (
    <div>
      <ul>
        {objectArray.map((item) => {
            return <Color key={item.id} item= {item}/>
        })}
      </ul>
    </div>
  )
}

export default Colors
