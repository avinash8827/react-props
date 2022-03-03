import React, { useState } from 'react'
import B from './B'
import D from './D';
import E from './E';
import F from './F';


//RFC
export default function A() {
    //1 State / Hooks variables
    const friendName1 = "Anil"; //State Variable 1
    const friendName2 = "Ritik";//State Variable 1
    const [friendName3, setFriendName3] = useState('Avinash'); // Hook variables

    const [allfriends,setAllFriends] = useState(['Abhishek','Ritik','Avinash']);

    const [allfriends2,setAllFriends2] = useState([ //Array of object
                                                    {
                                                        name:"Abhishek",
                                                        contact:"o9789080",
                                                        address:"Manasa",
                                                    },
                                                    {
                                                        name:"Ritik",
                                                        contact:"9079809",
                                                        address:"Jiran",
                                                    },
                                                    {
                                                        name:"Avinash",
                                                        contact:"987909887",
                                                        address:"Neemuch",
                                                    }
                                                    
                                                ]);

    //2. Function




    //3.
    return (
        <>
            <div>A</div>
            <B mybestfriend={friendName1}></B>
            <D allfriends={allfriends} />

            <E myallfriends2={allfriends2} />
            <F  />
        </>
        
        
    )
    }
