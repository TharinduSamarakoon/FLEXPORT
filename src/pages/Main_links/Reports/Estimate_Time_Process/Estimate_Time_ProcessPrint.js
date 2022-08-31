import React, { useState, useEffect } from "react";
import { Button, Icon, Block } from "../../../../components/Component";
import Content from "../../../../layout/content/Content";
import { FormGroup, Label, Input, Row, Col} from "reactstrap";
import Head from "../../../../layout/head/Head";
import LogoDark from "../../../../images/logo-dark2x.png";
import { quotationData } from "./Estimate_Time_Process";

const QuotationPrint = ({ match }) => {
  const [data] = useState(quotationData);
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => window.print(), 500);
  }, []);

  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);

  return (
    <body className="bg-white">
      <Head title="ESTIMATE TIME & PROCESS PRINT"></Head>
      {user && (
        <Content>
          <Block className="">
                <Row className="gy-4">
              <Col sm="6">
              <div className="table-responsive mt-5">
            <table className="table table-hover ">
            <thead className="border">
            <tr>
                          <th className="col-sm-1 text-center">No</th>
                          <th className="col-sm-1 text-center"></th>
                          <th className="col-sm-3 text-center">Process</th>
                          <th className="col-sm-5 text-center">Estimate Time in Mins / Hours
                            <th className="col-sm-5 text-center">Skilled</th>
                            <th className="text-center">Semisk</th>
                            <th className="col-sm-5 text-center">Unsk</th>
                          </th>
                          <th className="col-sm-5 text-center">Actual</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td className="border-left">1</td>
                          <td rowSpan="5" className="border-right border-left">Art work</td>
                          <td>Computer graphics</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">2</td>
                          
                          <td>Mockup making</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">3</td>
                          
                          <td>Artwork preperation</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">4</td>
                          
                          <td>Photo tools</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">5</td>
        
                          <td className="border-bottom">3D Modeling</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">6</td>
                          <td rowSpan="3" className="border-right border-left">Lamina</td>
                          <td>Photo resist</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">7</td>
                          <td>Screen Printing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">8</td>
                          <td className="border-bottom">Sticker</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 

                        <tr>
                        <td className="border-left">9</td>
                          <td rowSpan="4" className="border-right border-left">Etching</td>
                          <td>Chemical rotary etchers</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">10</td>
                          <td>Conveyor etcher</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">11</td>
                          <td>Passthrough etching</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">12</td>
                          <td className="border-bottom">Laser engraving</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">13</td>
                          <td rowSpan="3" className="border-right border-left">Craving</td>
                          <td>Investment casting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">14</td>
                          <td>Centrifugal casting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">15</td>
                          <td className="border-bottom">Resine casting</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">16</td>
                          <td rowSpan="5" className="border-right border-left">Welding</td>
                          <td>Gas welding</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">17</td>
                          <td>Electric welding</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">18</td>
                          <td>Tig welding</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">19</td>
                          <td>Micro welding</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">20</td>
                          <td className="border-bottom">Spot Welding</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">21</td>
                          <td rowSpan="5" className="border-right border-left">Bonding</td>
                          <td>Rivet</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">22</td>
                          <td>Hot glue</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">23</td>
                          <td>Pasting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">24</td>
                          <td>Silver brazing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">25</td>
                          <td className="border-bottom">Soldering</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 



                        <tr>
                        <td className="border-left">26</td>
                          <td rowSpan="11" className="border-right border-left">Bonding</td>
                          <td>Band saw</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">27</td>
                          <td>Fretso</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">28</td>
                          <td>Gas</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">29</td>
                          <td>Grinder wheel cutting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">30</td>
                          <td>Gullatine</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">31</td>
                          <td>Hacksaw</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">32</td>
                          <td>Jig saw</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">33</td>
                          <td>Laser cutting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">34</td>
                          <td>Lathe cutting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">35</td>
                          <td>Notching</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">36</td>
                          <td className="border-bottom">Press cutting</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">37</td>
                          <td rowSpan="7" className="border-right border-left border-bottom">Bonding</td>
                          <td>Hand filling</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">38</td>
                          <td>Verticle filling</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">39</td>
                          <td>Rotary filling</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">40</td>
                          <td> Surface grinding</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">41</td>
                          <td>Beff sanding</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">42</td>
                          <td>Verticle box</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left border-bottom">43</td>
                          <td className="border-bottom">Universal grinding</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 

                      </tbody>
              </table>
              </div> 
              </Col>

              {/* second col table*/}
              <Col sm="6">
              <div className="table-responsive mt-5">
            <table className="table table-hover table-border-dark ">
            <thead className="border">
            <tr >
                          <th className="col-sm-1 text-center">No</th>
                          <th className="col-sm-1 text-center"></th>
                          <th className="col-sm-3 text-center">Process</th>
                          <th className="col-sm-5 text-center">Estimate Time in Mins / Hours
                            <th className="col-sm-5 text-center">Skilled</th>
                            <th className="text-center">Semisk</th>
                            <th className="col-sm-5 text-center">Unsk</th>
                          </th>
                          <th className="col-sm-5 text-center">Actual</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td className="border-left">44</td>
                          <td rowSpan="5" className="border-right border-left">Fabricating</td>
                          <td>Hand fabrication</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">45</td>
                          
                          <td> Fabrication gas</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">46</td>
                          <td>Fabrication electric</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">47</td>
                          <td>Fabrication soldering</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">48</td>
        
                          <td className="border-bottom">Fitting</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">49</td>
                          <td rowSpan="4" className="border-right border-left">Milling Shaping</td>
                          <td>Shaping</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">50</td>
                          <td>Milling cut off</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">51</td>
                          <td>Shaper knurling</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">52</td>
                          <td className="border-bottom">Shaper grooving</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 

                        <tr>
                        <td className="border-left">53</td>
                          <td rowSpan="4" className="border-right border-left">Lathe</td>
                          <td>Turning</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">54</td>
                          <td>Knurling</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">55</td>
                          <td>Screw cutting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">56</td>
                          <td className="border-bottom">Drill</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">57</td>
                          <td rowSpan="6" className="border-right border-left">Bending</td>
                          <td>Manual bending</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">58</td>
                          <td>Magnetic bending</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">59</td>
                          <td>Groove bending</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">60</td>
                          <td>Jig bending</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>

                        <tr>
                          <td className="border-left">61</td>
                          <td>Press bending</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">62</td>
                          <td className="border-bottom">Machine bending</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">63</td>
                          <td rowSpan="3" className="border-right border-left">Spinning</td>
                          <td>Spinning</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">64</td>
                          <td>Mould turning</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">65</td>
                          <td className="border-bottom">Foot nozing bending</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">66</td>
                          <td rowSpan="2" className="border-right border-left">Fibre</td>
                          <td>Fiber fabrication</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">67</td>
                          <td className="border-bottom">Fiber moulding</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">68</td>
                          <td rowSpan="7" className="border-right border-left ">Painting</td>
                          <td>Hand paint</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">69</td>
                          <td>Spray paint</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">70</td>
                          <td>Spray lacquering</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">71</td>
                          <td>Hand lacquering</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">72</td>
                          <td>Dip lacquering</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">73</td>
                          <td>Clear lacquering</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left border-bottom">74</td>
                          <td className="border-bottom">Dome coat</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 



                        <tr>
                        <td className="border-left">75</td>
                          <td rowSpan="4" className="border-right border-left">Electro cleaning</td>
                          <td>Electro cleaning</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">76</td>
                          <td>Acid cleaning</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">77</td>
                          <td>Sand blasting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">78</td>
                          <td className="border-bottom">Wire brush cleaning</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 

                        <tr>
                        <td className="border-left">79</td>
                          <td rowSpan="4" className="border-right border-left">Hair line matt</td>
                          <td>Machine royal flex</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">80</td>
                          <td>Sand paper lines</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">81</td>
                          <td>pad lines</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">82</td>
                          <td className="border-bottom">Belt sand lines</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 
 


                        <tr>
                        <td className="border-left">83</td>
                          <td colSpan="2" className="border-right border-left text-center text-light"><b>Screen Print</b></td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr>

                        <tr>
                        <td className="border-left">84</td>
                          <td colSpan="2" className="border-right border-left text-center text-light"><b>Nano Plating</b></td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr>

                        <tr>
                        <td className="border-left">85</td>
                          <td colSpan="2" className="border-right border-left text-center text-light"><b>3D Printing</b></td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr>

                        <tr>
                        <td className="border-left border-bottom">85</td>
                          <td colSpan="2" className="border-right border-left  border-bottom text-center text-light"><b>Total</b></td>
                          <td className="border-bottom">
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr>


                      </tbody>
              </table>
              </div> 
              </Col>
            </Row>


               {/* second separate table*/}
               <Row className="gy-4">
            <Col sm="6">
            <div className="table-responsive mt-5">
            <table className="table table-hover border-top ">
            <thead className="border">
                      </thead>
                      <tbody>
                      <tr>
                        <td className="border-left">87</td>
                          <td rowSpan="8" className="border-right border-left">Polishing</td>
                          <td>Emery Polishing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">88</td>
                          <td>Lustre polishing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">89</td>   
                          <td>Rouge finishing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">90</td> 
                          <td>Coir brush polishing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">91</td>
                          <td>Hand buffing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">92</td>
                          <td>Cable buffing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">93</td>
                          <td>Brass polishing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">94</td>
        
                          <td className="border-bottom">Brass polishing</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">94</td>
                          <td rowSpan="8" className="border-right border-left">Electro plating</td>
                          <td>Gold plating</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">96</td>
                          <td>Silver plating</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">97</td>
                          <td>Chrome plating</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">98</td>
                          <td>Nickle plating</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">99</td>
                          <td>Electro forming</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">100</td>
                          <td>Anodising</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">101</td>
                          <td>Copper plating</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">102</td>
                          <td className="border-bottom">Oxydizing</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 

                        <tr>
                        <td className="border-left">103</td>
                          <td rowSpan="6" className="border-right border-left">Installing</td>
                          <td>Pasting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">104</td>
                          <td>Nailing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">105</td>
                          <td>Screwing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">106</td>
                          <td>Double side tape</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">107</td>
                          <td>key hole/stand</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">108</td>
                          <td className="border-bottom">Installing</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">109</td>
                          <td rowSpan="8" className="border-right border-left">Packaging Ventures</td>
                          <td>Screen printing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">110</td>
                          <td>Box cutting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">111</td>
                          <td>Box macking</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">112</td>
                          <td>Polythene pack</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">113</td>
                          <td>Srink wrapping</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">114</td>
                          <td>Zipper bag</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">115</td>
                          <td>Cleaning</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">116</td>
                          <td className="border-bottom">Velvatizing</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 


                        <tr>
                        <td className="border-left">117</td>
                          <td rowSpan="6" className="border-right border-left">Wood Work</td>
                          <td>Wood mould making</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">118</td>
                          <td>Routing adge</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">119</td>
                          <td>Wood box making</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">120</td>
                          <td>Wood thicknessing</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">121</td>
                          <td>Wood grooving</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">122</td>
                          <td className="border-bottom">Wooden backing</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 



                        <tr>
                        <td className="border-left">123</td>
                          <td rowSpan="2" className="border-right border-left">Embosing</td>
                          <td>Laser emboss cutting</td>
                          <td>
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right"><span></span></td>
                        </tr>
                        <tr>
                          <td className="border-left">124</td>
                          <td className="border-bottom">Ni sheet embossing</td>
                          <td className="border-bottom">
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          <td className=""><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr> 



                        <tr>
                          <td colSpan="3" className="border-right border-left  border-bottom text-center text-light"><b>Total</b></td>
                          <td className="border-bottom">
                          <td><span></span></td>
                          <td><span></span></td>
                          <td><span></span></td>
                          </td>
                          <td className="border-right border-bottom"><span></span></td>
                        </tr>


                      </tbody>
              </table>
              </div> 
              </Col>
              <Col sm="6">
              <div className="table-responsive mt-5">
            <table className="table table-hover table-border-dark ">
            <thead className="border">
            <tr >
                          <th className="col-sm-1 text-center">SUBCONTRACT</th>
                          <th className="col-sm-1 text-center">AMOUNT</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr className="border">
                        <td className="border-right">3D Printing</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">Mould Making</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">Resine casting</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">Metal casting</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">Jewellery casting</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">Laser metal cutting</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">CNC</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right">Powder coating</td>
                        <td><span></span></td>
                      </tr>
                      <tr className="border">
                        <td className="border-right text-center text-light"><b>Sub Contact Total</b></td>
                        <td><span></span></td>
                      </tr>
                      </tbody>
              </table>
              </div> 
              </Col>
            </Row>
          </Block>
        </Content>
      )}
    </body>
  );
};

export default QuotationPrint;
