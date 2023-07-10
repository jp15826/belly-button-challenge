// let data=d3.json("samples.json");
// console.log(data);

 //function for meta data
function demographics(sample)
{
    console.log(sample);

    d3.json("samples.json").then((data)=> {
        let metaData=data.metadata;
        //console.log(metaData);

        let result= metaData.filter(sampleResult=> sampleResult.id == sample);
        //console.log(result);

        let resultSample=result[0];

        d3.select("#sample-metadata").html("");

        Object.entries(resultSample).forEach(([key,value]) =>{
            d3.select("#sample-metadata")
            .append("h5").text(`${key}: ${value}`);
        });
      
    });
}

//function for bar chart

function barChart(sample)
{
    //console.log(sample);
    //let data=d3.json("samples.json");
    //console.log(data);

    d3.json("samples.json").then((data)=> {
        let sampleData=data.sample;
        let result= sampleData.filter(sampleResult=> sampleResult.id == sample);

        console.log(result);

        let resultSample=result[0];

    });
}


//function for dashboard
function initialize()
{
    var select=d3.select("#selDataset");

    //dropdown selector
    d3.json("samples.json").then((data) => {
        var sampleNames=data.names;
        //console.log(sampleNames)});

    
        sampleNames.forEach((sample)=> {
            select
                .append ("option")
                .text(sample).
                property("value",sample);
            });

        let samplefirst= sampleNames[0];
        demographics(samplefirst);

        barChart(samplefirst);
    });            

}


// function to update dashboard
function optionChange(item)
{
    //console.log(item);
    demographics(item);
    barChart(item);
}
// call for function initialize
initialize();

