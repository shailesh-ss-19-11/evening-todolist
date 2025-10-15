import { Modal } from "react-bootstrap";

const EditTodo = (props) => {
    // destructuring 
    const { task, handleEditTask, updateTask, showModal, setshowModal } = props;
    return (
        <Modal
            onHide={() => setshowModal(false)}
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" defaultValue={task?.taskName} onChange={handleEditTask} />
                </div>
                <div>
                    <button className="btn btn-sm btn-primary" onClick={updateTask}>Submit</button>
                </div>
            </Modal.Body>
        </Modal>
    )

}

export default EditTodo;