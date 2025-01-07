
export interface Layout {
    /**
     * The \<title>
     */
    title : string,

    /**
     * The \<meta> description
     */
    description : string,

    /**
     * Language code. Default 'en'
     */
	lang? : string,

    /**
     * Extra class names on \<body>s
     */
	class? : string,

    /**
     * @prop title : string
     * @prop description : string
     * @prop lang : string?
     * @prop class : string
     */
	props? : true
}