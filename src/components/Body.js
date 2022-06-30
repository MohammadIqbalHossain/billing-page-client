import React from 'react';

const Body = () => {
    return (
        <div>
            <div className="flex justify-around items-center m-10 ">
               <div className="flex items-center ">
                   <h1 className="text-2xl font-semibold">Billing</h1>
                   <input type="text" placeholder="Search" class="input input-bordered input-primary w-full max-w-xs mx-10" />
               </div>
               <div>
               <button className="btn btn-outline">Add new Bill</button>
               </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Ammount</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Body;