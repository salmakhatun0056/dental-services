import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div>
            <h2 className='text-info text-center mt-3'>This is blog section</h2>
            <div className='blog-container container text-center'>
                <div className='blog'>
                    <h5 className='text-info text-center'>Difference between authorization and authentication</h5>
                    <table className='w-100' border='1px'>
                        <thead>
                            <tr>
                                <th>Authentication</th>
                                <th>Authorization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Authentication verifies who the user is.</td>
                                <td>Authorization determines what resources a user can access.</td>
                            </tr>
                            <tr>
                                <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                                <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                            </tr>
                            <tr>
                                <td>Authentication is the first step of a good identity and access management process.</td>
                                <td>Authorization always takes place after authentication.</td>
                            </tr>
                            <tr>
                                <td>Authentication is visible to and partially changeable by the user.</td>
                                <td>Authorization isn't visible to or changeable by the user.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='blog'>
                    <h5 className='text-info text-center'>Why are you using firebase? What other options do you have to implement authentication? </h5>
                    <p>Ans: <small>Firebase helps teams from startups to global enterprises build and run successful apps.We can easily add our favorite tools in firebase.we can work on these apps with confidence.Yes.I have other options for implementing authentication.For example,Back4App,AWS Amplify,Kuzzle,Couchbase,NativeScript,RxDB,Flutter.</small></p>
                </div>
                <div className='blog'>
                    <h5 className='text-info text-center'>What other services does firebase provide other than authentication</h5>
                    <p>Ans: <small>firebase provides different kinds of services that help  to develop high-quality mobile and web applications to grow . Firebase provides services other than authentication.There are many services that Firebase provides.The most useful of which are:Cloud FireStore,Cloud function,Authentication,Hosting,Cloud storage,Google Analytics,Prophecy,Cloud messaging.Firebase is a full package that can help in developing  mobile or web applications faster with fewer resources and more efficiency.</small></p>
                </div>

            </div>
        </div>
    );
};

export default Blog;