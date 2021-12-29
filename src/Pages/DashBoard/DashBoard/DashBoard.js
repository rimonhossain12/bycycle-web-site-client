import React from 'react';
import Banner from '../../Home/Banner/Banner';

const DashBoard = () => {
    return (
        <div>
            <Banner />
            <h2 className="my-5">This is DashBoard</h2>
            <div class="container-sm mt-5">
                <div class="row">
                    <div class="col-3 border-end">
                       <p>hello</p>
                       <p>hello</p>
                       <p>hello</p>
                       <p>hello</p>
                       <p>hello</p>
                    </div>
                    <div class="col-9">col-4</div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;