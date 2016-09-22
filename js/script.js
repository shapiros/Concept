
window.onload = function onLoad() {
    var school_name = "Boston School";
    var school_description = ""; 
    var about_school_text = "The mission of Ross Montessori School is to prepare compassionate life-long learners to have a positive impact on the world.We envision a time when Ross Montessori School will be an exemplary educational institution and recognized as such all over the world. Educators from all backgrounds will observe and learn from our model, grounded in the Montessori Method. Parents will choose our school over any other with a steadfast belief in the value we create for the children, families and communities we serve.";
    document.getElementById("about-school-text").innerHTML = about_school_text.substring(0,450)+" ...";
};
