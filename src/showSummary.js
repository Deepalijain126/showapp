import { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";

const ShowSummary = () => {
    const [summary, setSummary] = useState('');
    const { showId } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      const fetchSummary = async () => {
        try {
          const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
          const data = await response.json();
          setSummary(data.summary);
        } catch (error) {
          console.log('Error fetching summary:', error);
        }
      };
  
      fetchSummary();
    }, [showId]);

    const handleBookShow = () => {
        setShowForm(true);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name,
            email,
          };
          localStorage.setItem('formData', JSON.stringify(formData));
      
          // Reset form fields
          setName('');
          setEmail('');
      
          // Display success message or perform further actions
          console.log('Form submitted successfully!');
        };
        
       
  
    return (
      <div className="show-summary container">
        <h1>Show Summary</h1>
        <p>{summary}</p>
        {showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <button type="submit">Book Show</button>
        </form>
      ) : (
        <button onClick={handleBookShow}>Book Show</button>
      )}
      <Link className="show-link" to="/">Go Back to Show List</Link>
      </div>
    );
  };
  
  export default ShowSummary;