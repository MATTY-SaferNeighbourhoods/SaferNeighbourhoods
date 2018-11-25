import React, { Component } from 'react';
import './DiscussionPage.css'

class DiscussionTable extends Component {
    render() {
        return (
<div> 
            <table className="table discussionTable">
                <thead className="thead myThead">
                    <tr>
                        <th scope="col">Type of Incident</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Stolen bike</td>
                    <td>11/21</td>
                    </tr>
                    <tr>
                    <td>New Pothole</td>
                    <td>11/20</td>
                    </tr>
                    <tr>
                    <td>Lost Puppy</td>
                    <td>11/20</td>
                    </tr>
                    <tr>
                    <td>Missing Child</td>
                    <td>11/20</td>
                    </tr>
                </tbody>
            </table>       
        </div>
        )}
    }
  
  export default DiscussionTable;