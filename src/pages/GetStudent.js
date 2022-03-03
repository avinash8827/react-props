import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import swal from 'sweetalert';


const config = require('../config.json');

export default function GetStudent() {
    //1. State/Hooks Variable
    const [student,setStudent] = useState({
        data:[]
    });//Empty Array

    const [show,setShow] = useState(false);
    const [name,setName] = useState('');
    const [id,setId] = useState('');

    let param = useParams()

    useEffect(()=>{
        console.log("Page loadded succfully");
        getStudents();
    },[]);
    //2. Function defination
    let getStudents = (pageno=1)=>{// e = event //ES6 Fat arrow functions // default argument
        console.log(config.base_url);
        console.log('good morning')
        //Alway wrap the api calling code inside trycatch block
        try {
            //Call the api
            // Fetch API
            //AXIOS

            //What is the api
            //Fetch API with Promise Chain
            fetch(`${config.base_url}/api/friends?pagination[page]=${pageno}&pagination[pageSize]=10`)
            .then((data)=>{
            //let make data json readable
            return data.json();
            }).then((data)=>{
            console.log(data);

            //Set karne se pahle
            //console.log('before set',student);
            //not set the student data in student hook variable
            
            setStudent(data);
            //Set karne ke baad data kya hai


            //array.map(function(currentValue, index, arr));
            //PaginationItem()
            
            
            }).catch((err)=>{
                console.log(err);
            });


        } catch (error) {
        console.log(error)
        }
    }

    let submitStudent = (e)=>{
        e.preventDefault();

        //setIsLoading(true);
        //setIsSubmitted('disabled');

        console.log('submitted');

        ///api/friends/:id
        let data = {  //JSON Javascript Object Notation
            "data": {
              "name": name
            }
        };

        // With the help of fetch api i have to make PUT Request
        fetch(`${config.base_url}/api/friends/`+id,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((data)=>{
            //let make data json readable
            return data.json();
        }).then((data)=>{
            console.log(data);
            //setIsLoading(false);
            //setIsSubmitted('');
            swal("Good job!", "Friend Updated Successfully", "success");
        
        
        }).catch((err)=>{
            console.log(err);
        });
    }

    let handleShow = (e)=>{
        let n = e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML;
        let id = e.target.closest('tr').querySelector('td:nth-child(1)').innerHTML;
        setId(id);
        setName(n);
        console.log(e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML);
        //alert('okjokokok');
        setShow(true);
    }
    let handleClose = ()=>{
        setShow(false);
    }
    //3. REturn statement JSX
    return (

        <Layout>
            <Modal size="lg" show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Friend</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e)=>{ submitStudent(e); }}>
                        <div className="mb-3">
                            <label htmlFor="friendname" className="form-label">Friend Name</label>
                            <input type="text" name="friend_name" value={name} onChange={(e)=>{ setName(e.target.value) }} className="form-control" id="friendname" />
                        </div>                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" >
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <h1>GetStudent {param.stu_id} {param.id} </h1>
            <h1 className="d-flex justify-content-center">Read Operation with Pagination</h1>
            <div className="d-flex justify-content-center">
                <Button onClick={(e)=>{ getStudents() }}>Get My Friends</Button>
            </div>
        
            <br />
            <br />
                {
                student.data.length > 0 &&
                <React.Fragment>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Friend Name</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        student.data.map(function(currentValue, index, arr){
                            console.log(arr[index].id);
                            console.log(arr[index].attributes.name);
                            return (
                                <tr key={index}>
                                    <td>{arr[index].id}</td>
                                    <td>{arr[index].attributes.name}</td>
                                    <td>
                                        <Button variant="success" size="sm">View</Button>&nbsp;
                                        <NavLink to={`/edit_student/${arr[index].id}`} variant="primary" size="sm">Edit</NavLink>&nbsp;
                                        <Button variant="primary" onClick={(e)=>{ handleShow(e) }}>
                                            Edit with Modal
                                        </Button>
                                        <Button variant="primary" onClick={(e)=>{ handleShow(e) }}>
                                            Edit with Modal2
                                        </Button>
                                        <Button variant="danger" size="sm">Delete</Button>
                                    </td>
                                </tr>
                            )//JSX
                        })
                        }
                        

                    </tbody>
                    </Table>
                    
                </React.Fragment>
            }
        </Layout>
        
    )
}
