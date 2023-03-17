// import Button from "react-bootstrap/Button";
import { React, useState ,createElement} from "react";
import Form from "react-bootstrap/Form";
import { DateRangePicker ,Button} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./formStyle.scss";
function MainForm() {

  // const [title, setTitle] = useState("");

  // const [shortDescription, setshortDescription] = useState("");
  // const [techSkills, setTechSkills] = useState("");
  // const [duration, setDuration] = useState("");
  // const [projects, setProjects] = useState([
  //   { title:title, duration: duration, techSkills:techSkills , shortDescription:shortDescription },
  // ]);
  // const handleProjectChange = (event, index) => {
  //   const { name, value } = event.target;
  //   const updatedProjects = [...projects];
  //   updatedProjects[index] = { ...updatedProjects[index], [name]: value };
  //   setProjects(updatedProjects);
  // };
  // const handleAddProject = () => {
  //   setProjects([
  //     ...projects,
  //     { title: "", duration: "", techSkills: "", shortDescription: "" },
  //   ]);
  //   console.log(projects);
  // };



function handleAddProject({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}


  return (
    <>
      <div className="mainFromdiv">
        <h2>Your Profile</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Designation" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>TechSkills</Form.Label>
            <Form.Control type="text" placeholder="TechSkills" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <div className="projectTitle">
            <h3>Project</h3>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label> Duration &nbsp;&nbsp;</Form.Label>
              <DateRangePicker />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>TechSkills</Form.Label>
              <Form.Control type="text" placeholder="TechSkills" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>ShortDescription</Form.Label>
              <Form.Control type="text" placeholder="Designation" />
            </Form.Group>
            {/* {projects.map((project, index) => {
              <div key={index}>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label>{title}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={project.title}
                    onChange={(even) => handleProjectChange(even, index)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label> Duration &nbsp;&nbsp;</Form.Label>

                  <DateRangePicker
                    value={project.duration}
                    onChange={(even) => handleProjectChange(even, index)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label>TechSkills</Form.Label>
                  <Form.Control
                    type="text"
                    value={project.techSkills}
                    placeholder="TechSkills"
                    onChange={handleProjectChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label>ShortDescription</Form.Label>
                  <Form.Control
                    type="text"
                    value={project.shortDescription}
                    placeholder="Designation"
                    onChange={handleProjectChange}
                  />
                </Form.Group>
              </div>;
            })} */}
         
          </div>

          <div className="addDivDynamikly" onClick={handleAddProject}>
            <i class="fas fa-plus fa-3x"></i>
          </div>
          <div className="submitBtn">
          <Button appearance="primary">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
export default MainForm;
