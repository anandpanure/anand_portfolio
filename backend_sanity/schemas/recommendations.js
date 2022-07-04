export default {
    name: 'recommendations',
    title: 'Recommendations',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot:true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}