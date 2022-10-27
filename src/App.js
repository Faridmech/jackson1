
import './App.css';

function App() {
  return (
    <div  style= {{
      marign: "auto",
      width: 800,
      paddingTop:"1rem",
    }}
    >
      <h1 className='title'>Ferid Huseynli</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Ad1</th>
            <th>Ad2</th>
            <th>Ad3</th>
            <th>Ad4</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ferid</td>
            <td>Fuad</td>
            <td>Ceyhun</td>
            <td>Samir</td>
          </tr>
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
