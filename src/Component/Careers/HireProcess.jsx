import "./HireProcess.css";

export default function HireProcess() {
  return (
    <div className="hire-container">
      <div className="hire-content">
        <hr className="hire-divider" />
        <p className="hire-heading">Our Hiring Process</p>
        <div className="hire-grid">
          <div className="hire-card">
            <h2>No resume required</h2>
            <p>
            Instead of traditional resumes, our application process includes structured short-answer questions to assess your skills, passion, and alignment with our values.
            </p>
          </div>
          <div className="hire-card">
            <h2>Structured Interviews </h2>
            <p>
            To ensure fair evaluation, we provide interview questions in advance and assess all candidates based on pre-defined criteria.
         </p>
          </div>
          <div className="hire-card">
            <h2>Work with us</h2>
            <p>
            Finalists participate in a real-world, paid assessment project to evaluate their skills in a professional setting, ensuring an equal opportunity for all.           
             </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
