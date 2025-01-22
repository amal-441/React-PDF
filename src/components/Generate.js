import React,{useState} from "react";


const Generate = () => {
    const [selectedName, setSelectedName] = useState('');
  
    const handleDownloadPDF = () => {
      if (!selectedName) {
        alert('Please select a name before downloading.');
        return;
      }
  
      const link = document.createElement('a');
      link.href = `/${selectedName}.pdf`; // Path to the file in the public folder
      link.download = `${selectedName}.pdf`;
      link.click();
    };
  
    return (
      
      <div style={{ textAlign: 'center', marginTop: '50px', }}>
        <div style={{ marginBottom: '20px',position:"fix",top: '50px', right: '20px'}}>
          <select
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            style={{ padding: '10px', fontSize: '16px',position:"relative",left:"400px"}}
          >
            <option value="">Select a name</option>
            <option value="chithra">Chithra</option>
            <option value="aravind">Aravind</option>
            <option value="arjun">Arjun</option>
          </select>
        </div>
        <button onClick={handleDownloadPDF} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Download PDF
        </button>
      </div>
    );
  };
  
  export default Generate;