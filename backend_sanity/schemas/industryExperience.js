export default{
    name:'industryExperience',
    title:'Industry Experience',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'positions',
            title:'Positions',
            type:'array',
            of:[{
                type:'document',
                fields:[
                       {   name:'title',
                           title:'Title',
                           type:'string'
                        },
                        {
                            name:'description',
                            title:'Description',
                            type: 'array', 
                            of: [{type: 'block'}]
                        }
                ]
            }]
        },
    ]
}