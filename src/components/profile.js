import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // Add this import
import userService from '../services/userService';
import NavBar from './Home/NavBar';
import Footer from './Home/footer';

export default function Profile() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getUserInfo()
            .then(res => {
                console.log(res.data.data);
                setUsers(res.data.data);
            })
            .catch(err => window.alert(err.response.data.error));
    }, []);

    // State variables to track user input for each field
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleUpdateProfile = async (index) => {
        const updatedUser = {
            fName: firstName || users[index].fName,
            lName: lastName || users[index].lName,
            email: email || users[index].email,
            phoneNumber: phoneNumber || users[index].phoneNumber,
            role: users[index].role
        };

        try {
            const res = await userService.updateUserInfo(updatedUser);
            console.log("User information updated successfully.", res.data);
            toast.success('Profile updated successfully', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setUsers(prevUsers => {
                const updatedUsers = [...prevUsers];
                updatedUsers[index] = res.data;
                return updatedUsers;
            });
        } catch (error) {
            console.error('Error updating user information:', error);
            toast.error('Error updating user information', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div>
            <NavBar />
            <div>
                {users.map((user, index) => (
                    <div className="user-profile-wrapper" key={index}>
                        <div className="user-profile">
                            <img src="images/123.png" alt="Avatar" className="profile-picture" />
                            <div className="user-details">
                                <div className="text-fields">
                                    <div className="text-fields-row">
                                        <label htmlFor={`fName${index}`}>FIRSTNAME:</label>
                                        <input
                                            type="text"
                                            id={`fName${index}`}
                                            placeholder="Email"
                                            value={firstName || user.fName}
                                            readOnly={false}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <label htmlFor={`lName${index}`}>LASTNAME:</label>
                                        <input
                                            type="text"
                                            id={`lName${index}`}
                                            placeholder="Phone"
                                            value={lastName || user.lName}
                                            readOnly={false}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="text-fields-row">
                                        <label htmlFor={`email${index}`}>EMAIL:</label>
                                        <input
                                            type="text"
                                            id={`email${index}`}
                                            placeholder="Email"
                                            value={email || user.email}
                                            readOnly={false}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor={`phone${index}`}>PHONE:</label>
                                        <input
                                            type="text"
                                            id={`phone${index}`}
                                            placeholder="Phone"
                                            value={phoneNumber || user.phoneNumber}
                                            readOnly={false}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="text-fields-row">
                                        <label htmlFor={`role${index}`}>ROLE:</label>
                                        <input
                                            type="text"
                                            id={`role${index}`}
                                            placeholder="Email"
                                            value={user.role}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="user-actions">
                                <button className="savebtn" onClick={() => handleUpdateProfile(index)}>UPDATE</button>
                                {/* <button >CANCEL</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
