import React, {LegacyRef, useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './LineChart.css'

type EventType = {
    eventid: string,
    eventtype: string,
    startdatetime:string,
    enddatetime: string,
    enteredon: string
}

export const LineChart = () => {
    const d3Chart = useRef()as React.MutableRefObject<SVGSVGElement>

        useEffect(()=>{
            fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                })
                
         
        })
    
    return (<div id ="d3demo">
        <h1>D3 React.js Charts</h1>
        <svg ref={d3Chart}></svg>
    </div>)
}