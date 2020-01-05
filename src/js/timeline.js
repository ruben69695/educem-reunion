const change_style_display = (array, display = 'none') => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.style.display = display;
    }
};

var timeline_page_classes = ["timeline-page-one", "timeline-page-two"];
var timeline_page_index = 0;

window.onload = () => {
    for (let page_index = 1; page_index < timeline_page_classes.length; page_index++) {
        const page_class = timeline_page_classes[page_index];
        var timelines_to_hide = document.getElementsByClassName(page_class);
        change_style_display(timelines_to_hide, 'none');
    }
};

document.getElementById('my-career').onclick = (event) => {

    console.log(`Page index ${timeline_page_index}`);
    console.log(`Current page ${timeline_page_classes[timeline_page_index]}`);

    var items_to_hide = document.getElementsByClassName(timeline_page_classes[timeline_page_index]);
    change_style_display(items_to_hide, 'none');

    if (timeline_page_index == 0) {
        timeline_page_index = 1;
    }
    else {
        timeline_page_index = 0;
    }

    var items_to_show = document.getElementsByClassName(timeline_page_classes[timeline_page_index]);
    change_style_display(items_to_show, 'block');
};