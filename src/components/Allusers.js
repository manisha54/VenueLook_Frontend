import React from 'react';

const userList = [
  { id: 1, name: 'Manisha Kumari Tharu', email: 'manisha123@example.com', phoneNumber: '9800562062', venueBooked: 'ThapaGaun Banquet', date: '2023/08/19', time:'19.00PM' },
  { id: 1, name: 'Manju Tharu', email: 'manju@example.com', phoneNumber: '9856282762', venueBooked: 'A-one Banquet', date: '2023/08/21', time:'2.00PM' },

];

export default function Allusers() {
  return (
    <div>
      <h2>All Users</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Venue Booked</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.venueBooked}</td>
                <td>{user.date}</td>
                <td>{user.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
