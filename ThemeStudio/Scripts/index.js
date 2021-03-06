// Theme properties
var defaultVal = {};
var themeColors = {};
var exportDialog, importDialog, filterDialog;
var themes = ['material', 'fabric', 'bootstrap', 'highcontrast'];
var curTheme = 'material';
var controlContent;
var colorchange = {};
var themeSwitherPopup;
var themeDropDownStatus = false;
var themeDropDown = document.getElementById('dropdownMenu1');
var themeDropDownText = document.getElementById('themeDropText');
var componentsId = [];
var clrpkrWrapper;
var checking = [];
//var element = document.getElementById("controls");
var themeProps = {
    material: {
        "Primary Color": {
            id: "primary",
            default: "#3f51b5",
            palettes: [
                "#f34235", "#e81d62", "#9b26af", "#6639b6", "#3e50b4", "#2095f2",
                "#02a8f3", "#00bbd3", "#009587", "#4bae4f", "#8ac249", "#ccdb38",
                "#ffea3a", "#ffc006", "#ff9700", "#ff5621", "#9d9d9d", "#5f7c8a",
                "#785447", "#000000", "#ffffff"
            ]
        },
        "Primary Font": {
            id: "primary-font",
            default: "#fff",
            palettes: [
                "#ffffff", "#F2F2F2", "#D8D8D8", "#BFBFBF", "#A5A5A5", "#7F7F7F",
                "#6E6E6E", "#595959", "#3F3F3F", "#262626", "#0C0C0C", "#000000"
            ]
        },
        "Accent Color": {
            id: "accent",
            default: "#ff4081",
            palettes: [
                "#ff8A80", "#ff5252", "#ff1744", "#d50000", "#ff80ab", "#ff4081", "#f50057", "#c51162",
                "#ea80fc", "#e040fb", "#d500f9", "#aa00ff", "#b388ff", "#7c4dff", "#651fff", "#6200ea",
                "#8c9eff", "#536dfe", "#3d5afe", "#304ffe", "#82b1fc", "#448aff", "#2979ff", "#2962ff",
                "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea", "#84ffff", "#18ffff", "#00e5ff", "#00b8d4",
                "#a7ffeb", "#64ffda", "#1de986", "#00bfa5", "#b9fbca", "#69f0ae", "#00e676", "#00c853",
                "#ccff90", "#b2ff59", "#76ff03", "#64dd17", "#f4ff81", "#eeff41", "#c6ff00", "#aeea00",
                "#ffff8d", "#ffff00", "#ffea00", "#ffd600", "#ffe57f", "#ffd740", "#ffc400", "#ffa600",
                "#ffd1b0", "#ffab40", "#ff9100", "#ff6d00", "#ff9e80", "#ff6e40", "#ff3d00", "#dd2c00",
                "#000000", "#ffffff"
            ]
        },
        "Accent Font": {
            id: "accent-font",
            default: "#fff",
            palettes: [
                "#ffffff", "#F2F2F2", "#D8D8D8", "#BFBFBF", "#A5A5A5", "#7F7F7F",
                "#6E6E6E", "#595959", "#3F3F3F", "#262626", "#0C0C0C", "#000000"
            ]
        }


    },
    fabric: {
        "Primary Color": {
            id: "theme-primary",
            default: "#0078d7",
            palettes: [
                "#002050", "#00188f", "#0078d7", "#0077ff", "#00bcf2", "#0C0C0C",
                "#004b50", "#004b1c", "#107c10", "#008272", "#00b294", "#474747",
                "#32145a", "#80397b", "#5c2d91", "#b4009e", "#e300bc", "#6B6D7F",
                "#a80000", "#d83b01", "#e81123", "#ea4300", "#ff8c00",
            ]
        },
        "Primary font": {
            id: "theme-primary-font",
            default: "#fff",
            palettes: [
                "#ffffff", "#F2F2F2", "#D8D8D8", "#BFBFBF", "#A5A5A5", "#7F7F7F",
                "#6E6E6E", "#595959", "#3F3F3F", "#262626", "#0C0C0C", "#000000"
            ]
        }
    },
    bootstrap: {
        "Primary Color": {
            id: "brand-primary",
            default: "#428bca",
            palettes: [
                "#0070F0", "#6610F2", "#6F42C1", "#E83E8B", "#DC3243", "#845454",
                "#218739", "#128260", "#108193", "#6C7A00", "#B12EF1", "#0178C9",
                "#74588B", "#C34143", "#5866B6", "#0178C9", "#A459A1", "#C639AE",
                "#437584", "#6B6D7F", "#333333"
            ]
        },
        "Primary Font": {
            id: "brand-primary-font",
            default: "#fff",
            palettes: [
                "#ffffff", "#F2F2F2", "#D8D8D8", "#BFBFBF", "#A5A5A5", "#7F7F7F",
                "#6E6E6E", "#595959", "#3F3F3F", "#262626", "#0C0C0C", "#000000"
            ]
        }
    },
    highcontrast: {
        "Selection BG": {
            id: "selection-bg",
            default: "#FFD939",
            palettes: ["#3aca4d", "#ffd939", "#cc76f6", "#18d2eb", "#fe8aeb", "#5b94ff",
                "#ff82aa", "#7D8DFF", "#00D8AE", "#FF7C7E", "#7AA8FF", "#FF8860",
                "#00CBF1", "#7ED321", "#FD852F", "#E0FF00", "#CDE6F7", "#C09EF7",
                "#35D283", "#7FCBFE", "#DBE782", "#FFFFFF"
            ]
        },
        "Selection Border": {
            id: "selection-border",
            default: "#FFD939",
            palettes: ["#3aca4d", "#ffd939", "#cc76f6", "#18d2eb", "#fe8aeb", "#5b94ff",
                "#ff82aa", "#7D8DFF", "#00D8AE", "#FF7C7E", "#7AA8FF", "#FF8860",
                "#00CBF1", "#7ED321", "#FD852F", "#E0FF00", "#CDE6F7", "#C09EF7",
                "#35D283", "#7FCBFE", "#DBE782", "#FFFFFF"
            ]
        },
        "Selection Font": {
            id: "selection-font",
            default: "#000000",
            palettes: [
                "#FFFFFF", "#F2F2F2", "#D8D8D8", "#BFBFBF", "#A5A5A5", "#7F7F7F",
                "#6E6E6E", "#595959", "#3F3F3F", "#262626", "#0C0C0C", "#000000"
            ]
        },
        "Hover BG": {
            id: "hover-bg",
            default: "#685708",
            palettes: ["#3aca4d", "#ffd939", "#cc76f6", "#18d2eb", "#fe8aeb", "#5b94ff",
                "#ff82aa", "#7D8DFF", "#00D8AE", "#FF7C7E", "#7AA8FF", "#FF8860",
                "#00CBF1", "#7ED321", "#FD852F", "#E0FF00", "#CDE6F7", "#C09EF7",
                "#35D283", "#7FCBFE", "#DBE782", "#FFFFFF"
            ]
        },
        "Hover Border": {
            id: "hover-border",
            default: "#ffffff",
            palettes: ["#3aca4d", "#ffd939", "#cc76f6", "#18d2eb", "#fe8aeb", "#5b94ff",
                "#ff82aa", "#7D8DFF", "#00D8AE", "#FF7C7E", "#7AA8FF", "#FF8860",
                "#00CBF1", "#7ED321", "#FD852F", "#E0FF00", "#CDE6F7", "#C09EF7",
                "#35D283", "#7FCBFE", "#DBE782", "#FFFFFF"
            ]
        },
        "Hover Font": {
            id: "hover-font",
            default: "#FFFFFF",
            palettes: [
                "#FFFFFF", "#F2F2F2", "#D8D8D8", "#BFBFBF", "#A5A5A5", "#7F7F7F",
                "#6E6E6E", "#595959", "#3F3F3F", "#262626", "#0C0C0C", "#000000"
            ]
        },
        "Disable": {
            id: "disable",
            default: "#757575",
            palettes: ["#3aca4d", "#ffd939", "#cc76f6", "#18d2eb", "#fe8aeb", "#5b94ff",
                "#ff82aa", "#7D8DFF", "#00D8AE", "#FF7C7E", "#7AA8FF", "#FF8860",
                "#00CBF1", "#7ED321", "#FD852F", "#E0FF00", "#CDE6F7", "#C09EF7",
                "#35D283", "#7FCBFE", "#DBE782", "#FFFFFF"
            ]
        }
    }
}

function loadJson() {
    getThemeColors();
    renderDialogs();
    //renderRightPane();
    loadDefaultThemes('material', false);
}
loadJson();

function getThemeColors() {
    for (var i = 0; i < themes.length; i++) {
        var properties = themeProps[themes[i]];
        var keys = Object.keys(properties);
        var colors = {};
        for (var j = 0; j < keys.length; j++) {
            var p = properties[keys[j]];
            colors['$' + p.id] = p.default;
        }
        themeColors[themes[i]] = colors;
    }
    defaultVal = ej.base.extend({}, themeColors, {}, true);
}

// Render the right pane components
function renderRightPane() {
    // theme switcher datasource
    themeSwitherPopup = new ej.popups.Popup(document.getElementById('theme-switcher-popup'), {

        relateTo: themeDropDown,
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' },
        offsetY: 2,
        open: function () {
            themeDropDownStatus = true;
        },
        close: function () {
            themeDropDownStatus = false;
        }
    });
    themeDropDown.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        togglePopup(themeDropDownStatus);
    });
    function togglePopup(status) {
        themeSwitherPopup[status ? 'hide' : 'show']();
    }
    document.addEventListener('click', function () { togglePopup(true) });
    document.getElementById('themelist').addEventListener('click', function (e) {
        var parent = e.target.closest('li');
        var theme = parent.id;
        if (theme === curTheme) {
            return;
        }
        var text = parent.querySelector('.switch-text').innerHTML;
        document.querySelector('#themelist>.active').classList.remove('active');
        document.querySelector('#themelist>#' + theme).classList.add('active');
        themeDropDownText.innerHTML = text;
        curTheme = theme;
        themeSwitherPopup.hide();
        renderProperties(theme);
        loadTheme(theme);
    });
    // rendering theme mode light/dark
    var themeMode = new ej.buttons.RadioButton({ label: 'Light', name: 'theme-mode', value: 'Light', checked: true });
    themeMode.appendTo('#light');

    themeMode = new ej.buttons.RadioButton({ label: 'Dark', name: 'theme-mode', value: 'Dark' });
    themeMode.appendTo('#dark');

    // render default theme properties
    renderProperties('material');
    colorpicker();
}


function loadDefaultThemes(theme, isRightpanerender) {
    window.themes = theme;
    var themeObj = {};
    themeObj['theme'] = theme;
    themeColors = ej.base.extend({}, defaultVal, {}, true);
    var ajax = new ej.base.Ajax({
        type: "POST",
        url: "Home/loadtheme",
        contentType: 'application/json; charset=utf-8',
        processData: false,
        data: JSON.stringify({ themes: themeObj }) // Note it is important
    }, 'POST', true);
    ajax.send();
    ajax.onSuccess = function (data) {
        var styles = document.getElementById('custom-theme');
        styles.innerHTML = data;
        if (isfilterapplied) {
            generatefilterhtml();
        }
        else {
            destroyControls();

            renderComponents();
            if (!isRightpanerender) {
                renderRightPane();
            }

        }

        setTimeout(function () {
            removeOverlay(true);
            twocolumn_layout();
        }, 500);

        $('.theme-filter-header').show();
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    };
}


var themeBodyLeftOverlay = ej.base.select('.theme-body-left-ovelay');

function renderComponents() {
    //ej.base.select('.sb-body-overlay').classList.remove('sb-hide');
    var isMaterial = curTheme === 'material';
    ej.base.enableRipple(isMaterial);
    if (!controlContent) {
        cardelements = $('.layout-card');
        cardsContent = {};
        for (let i = 0; i < cardelements.length; i++) {
            cardsContent[cardelements[i].id] = cardelements[i].outerHTML;
        };
        controlContent = $('#controls').html();
    } else {
        if (!isfilterapplied) {
            $('#controls').html(controlContent);
        }
    }
    if ($("#component-numeric").length) {
        var numeric = new ej.inputs.NumericTextBox({
            value: 15
        });
        numeric.appendTo('#component-numeric');
    }
    if ($("#component-maskedtextbox").length) {
        var masked = new ej.inputs.MaskedTextBox({
            mask: '000-000-0000'
        });
        masked.appendTo('#component-maskedtextbox');
    }
    if ($("#component-slider").length) {
        var defaultObj = new ej.inputs.Slider({
            tooltip: { isVisible: true, showOn: 'Focus' },
            type: 'MinRange'
        });
        defaultObj.appendTo('#component-slider');
        defaultObj.value = 30;
    }

    //{ field: 'Freight', width: 120, format: 'C', textAlign: 'Right' }
    //{ field: 'CustomerID', headerText: 'Customer Name', width: 150 },
    if ($("#component-grid").length) {
        var grid = new ej.grids.Grid({
            dataSource: window.gridData,
            allowPaging: true,
            allowGrouping: true,
            groupSettings: { columns: ['OrderID'] },
            allowFiltering: true,
            filterSettings: { type: 'Menu' },
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 120, },
                { field: 'OrderDate', headerText: 'Order Date', format: 'yMd', width: 120 },
                { field: 'Freight', width: 120, format: 'C2', width: 130 },
                { field: 'ShippedDate', headerText: 'Shipped Date', format: 'yMd', width: 180 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ],
            pageSettings: { pageCount: 4, pageSize: 5 }
        });
        grid.appendTo('#component-grid');
    }

    var sportsData = ['Badminton', 'Basketball', 'Cricket',
        'Football', 'Golf', 'Gymnastics',
        'Hockey', 'Rugby', 'Snooker', 'Tennis'];

    if ($("#component-autcomplete").length) {
        // initialize AutoComplete component
        var atcObj = new ej.dropdowns.AutoComplete({
            //set the data to dataSource property
            dataSource: sportsData,
            // set the placeholder to AutoComplete input element
            placeholder: 'e.g. Basketball'
        });
        atcObj.appendTo('#component-autcomplete');
    }

    if ($("#component-dropdownlist").length) {
        var listObj = new ej.dropdowns.DropDownList({
            index: 2,
            placeholder: 'Select a game',
            popupHeight: '200px',

        });
        listObj.appendTo('#component-dropdownlist');
    }



    if ($("#dialogComponent").length) {
        ej.popups.Dialog.prototype.focusContent = function () { }
        var dlgObj = new ej.popups.Dialog({
            header: 'Delete Multiple Items',
            content: '<span>Are you sure you want to permanently delete these items ?</span>',
            target: document.getElementById('theme-dialog-wrapper'),
            showCloseIcon: true,
            buttons: [{
                click: confirmDlgBtnClick,
                buttonModel: { content: 'Yes', isPrimary: true }
            },
            { click: confirmDlgBtnClick, buttonModel: { content: 'No' } }],
            width: '40%',
            isModal: true,
            animationSettings: { effect: 'None' }
        });
        dlgObj.appendTo('#dialogComponent');
        function confirmDlgBtnClick() {
            dlgObj.hide();
        }

        // Create Button to open the confirmation Dialog
        var confirmBtn = new ej.buttons.Button({});
        confirmBtn.appendTo('#confirmBtn');
        document.getElementById('confirmBtn').onclick = function () {
            dlgObj.show();
        };

    }


    if ($("#component-multiselect").length) {
        var listObj = new ej.dropdowns.MultiSelect({
            placeholder: 'Favorite Sports',
            mode: 'Box'
        });
        listObj.appendTo('#component-multiselect');
    }

    if ($("#component-combobox").length) {
        var comboBoxObj = new ej.dropdowns.ComboBox({
            dataSource: window.ddCountryData,
            fields: { text: 'Name', value: 'Code' },
            placeholder: 'Select a country',
            popupHeight: '270px',
            allowFiltering: true,
            filtering: function (e) {
                var query = new ej.data.Query();
                query = (e.text !== '') ? query.where('Name', 'startswith', e.text, true) : query;
                e.updateData(window.ddCountryData, query);
            }
        });
        comboBoxObj.appendTo('#component-combobox');
    }

    if ($("#component-datepicker").length) {
        var datepicker = new ej.calendars.DatePicker();
        datepicker.appendTo('#component-datepicker');
    }

    if ($("#component-timepicker").length) {
        var timepicker = new ej.calendars.TimePicker();
        timepicker.appendTo('#component-timepicker');
    }

    if ($("#component-datetimepicker").length) {
        var datetimepicker = new ej.calendars.DateTimePicker();
        datetimepicker.appendTo('#component-datetimepicker');
    }

    if ($("#component-daterangepicker").length) {
        var daterangepicker = new ej.calendars.DateRangePicker();
        daterangepicker.appendTo('#component-daterangepicker');
    }

    if ($("#primarybtn").length) {
        var button = new ej.buttons.Button({ isPrimary: true });
        button.appendTo('#primarybtn');
    }

    if ($("#normalbtn").length) {
        button = new ej.buttons.Button({});
        button.appendTo('#normalbtn');
    }

    if ($("#outlinebtn").length) {
        button = new ej.buttons.Button({ cssClass: 'e-outline', isPrimary: true });
        button.appendTo('#outlinebtn');
    }

    if ($("#flatbtn").length) {
        button = new ej.buttons.Button({ cssClass: 'e-flat' });
        button.appendTo('#flatbtn');
    }

    if ($("#successbtn").length) {
        button = new ej.buttons.Button({ cssClass: 'e-success' });
        button.appendTo('#successbtn');
    }

    if ($("#warningbtn").length) {
        button = new ej.buttons.Button({ cssClass: 'e-warning' });
        button.appendTo('#warningbtn');
    }

    if ($("#togglebtn").length) {
        var toggleBtn = new ej.buttons.Button({ iconCss: 'e-icons e-play-icon', cssClass: 'e-flat e-primary', isToggle: true });
        toggleBtn.appendTo('#togglebtn');
        //Toggle button click event handler
        toggleBtn.element.onclick = function () {
            if (toggleBtn.element.classList.contains('e-active')) {
                toggleBtn.content = 'Pause';
                toggleBtn.iconCss = 'e-icons e-pause-icon';
            } else {
                toggleBtn.content = 'Play';
                toggleBtn.iconCss = 'e-icons e-play-icon';
            }
        };
    }


    if ($("#component-calendar").length) {
        var calendar = new ej.calendars.Calendar({});
        calendar.appendTo('#component-calendar');
    }


    var items = [
        {
            text: 'Dashboard',
            iconCss: 'e-ddb-icons e-dashboard'
        },
        {
            text: 'Notifications',
            iconCss: 'e-ddb-icons e-notifications',
        },
        {
            text: 'User Settings',
            iconCss: 'e-ddb-icons e-settings',
        },
        {
            text: 'Log Out',
            iconCss: 'e-ddb-icons e-logout'
        }];

    if ($("#textbtn").length) {
        btnObj = new ej.splitbuttons.DropDownButton({ items: items });
        btnObj.appendTo('#textbtn');
    }

    if ($("#icontextbtn").length) {
        btnObj = new ej.splitbuttons.DropDownButton({ items: items, iconCss: 'e-ddb-icons e-profile', cssClass: 'e-primary' });
        btnObj.appendTo('#icontextbtn');
    }


    if ($("#custombtn").length) {
        btnObj = new ej.splitbuttons.DropDownButton({ items: items, cssClass: 'e-caret-hide' });
        btnObj.appendTo('#custombtn');
    }
    var sitems = [
        {
            text: 'Paste',
            iconCss: 'e-btn-icons e-paste'
        },
        {
            text: 'Paste Special',
            iconCss: 'e-btn-icons e-paste-special'
        },
        {
            text: 'Paste as Formula',
            iconCss: 'e-btn-icons e-paste-formula'
        },
        {
            text: 'Paste as Hyperlink',
            iconCss: 'e-btn-icons e-paste-hyperlink'
        }
    ];

    if ($("#iconsplitbtn").length) {
        var splitButton = new ej.splitbuttons.SplitButton({ items: sitems, iconCss: 'e-btn-icons e-paste' });
        splitButton.appendTo('#iconsplitbtn');
    }

    if ($("#textsplitbtn").length) {
        splitButton = new ej.splitbuttons.SplitButton({ items: sitems, content: 'Paste', cssClass: 'e-primary' });
        splitButton.appendTo('#textsplitbtn');
    }

    if ($("#icontextsplitbtn").length) {
        splitButton = new ej.splitbuttons.SplitButton({ items: sitems, content: 'Paste', iconCss: 'e-btn-icons e-paste' });
        splitButton.appendTo('#icontextsplitbtn');
    }
    if ($("#listview-def").length) {
        var listObj = new ej.lists.ListView({
            dataSource: window.listData,
            fields: { groupBy: 'category' }
        });


        //Render initialized ListView component
        listObj.appendTo('#listview-def');
    }

    if ($("#treeviewComponent").length) {
        var treeObj = new ej.navigations.TreeView({
            fields: { dataSource: window.hierarchicalData, id: 'id', text: 'name', child: 'subChild' }
        });
        treeObj.appendTo('#treeviewComponent');
    }

    if ($("#Accordion_icon").length) {
        var accordion = new ej.navigations.Accordion({
            items: [
                { header: 'Athletics', iconCss: 'e-athletics e-acrdn-icons', content: '#athletics', expanded: true },
                { header: 'Water Games', iconCss: 'e-water-game e-acrdn-icons', content: '#water_games' },
                //{ header: 'Racing', iconCss: 'e-racing-games e-acrdn-icons', content: '#racing_games' },
                //{ header: 'Indoor Games', iconCss: 'e-indoor-games e-acrdn-icons', content: '#indoor_games' }
            ]
        });
        //Render initialized Accordion component
        accordion.appendTo('#Accordion_icon');
    }

    if ($("#tabComponent").length) {
        var tabObj = new ej.navigations.Tab({
            items: [
                {
                    header: { 'text': 'Twitter' },
                    content: 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
                    'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
                    'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
                    'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
                    'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
                    'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
                    'search queries per day.'
                },
                {
                    header: { 'text': 'Facebook' },
                    content: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
                    'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
                    'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
                    'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
                    'University. It gradually added support for students at various other universities and later to high-school students.'
                },
                {
                    header: { 'text': 'WhatsApp' },
                    content: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
                    'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
                    'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
                    'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
                    'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.'
                }
            ]
        });
        //Render initialized Tab component
        tabObj.appendTo('#tabComponent');
    }

    if ($("#scheduleComponent").length) {
        var scheduleObj = new ej.schedule.Schedule({
            height: '550px',
            selectedDate: new Date(2018, 1, 15),
            eventSettings: { dataSource: ej.base.extend([], window.scheduleData, null, true) }
        });
        scheduleObj.appendTo('#scheduleComponent');
    }

    if ($("#cb-componentchecked").length) {
        var checkBoxObj = new ej.buttons.CheckBox({ label: 'CheckBox', checked: true, });
        checkBoxObj.appendTo('#cb-componentchecked');
    }

    if ($("#cb-componentunchecked").length) {
        checkBoxObj = new ej.buttons.CheckBox({ label: 'Unchecked', checked: false, disabled: true });
        checkBoxObj.appendTo('#cb-componentunchecked');
    }

    if ($("#cb-componentintermediate").length) {
        checkBoxObj = new ej.buttons.CheckBox({ label: 'Indeterminate', indeterminate: true, disabled: true });
        checkBoxObj.appendTo('#cb-componentintermediate');
    }

    // function to handle the CheckBox change event
    function onChange(args) {
        this.label = 'CheckBox: ' + args.checked;
    }


    if ($("#componentradio1").length) {
        var radioButton = new ej.buttons.RadioButton({ label: 'Credit/Debit Card', name: 'payment', value: 'credit/debit', checked: true });
        radioButton.appendTo('#componentradio1');
    }

    if ($("#componentradio2").length) {
        radioButton = new ej.buttons.RadioButton({ label: 'Net Banking', name: 'payment', value: 'netbanking' });
        radioButton.appendTo('#componentradio2');
    }

    if ($("#componentradio3").length) {
        radioButton = new ej.buttons.RadioButton({ label: 'Cash on Delivery', name: 'payment', value: 'cashondelivery' });
        radioButton.appendTo('#componentradio3');
    }

    if ($("#toolbar_default").length) {
        var toolbarObj = new ej.navigations.Toolbar({
            items: [
                {
                    prefixIcon: 'e-cut-icon tb-icons', tooltipText: 'Cut'
                },
                {
                    prefixIcon: 'e-copy-icon tb-icons', tooltipText: 'Copy'
                },
                {
                    prefixIcon: 'e-paste-icon tb-icons', tooltipText: 'Paste'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-bold-icon tb-icons', tooltipText: 'Bold'
                },
                {
                    prefixIcon: 'e-underline-icon tb-icons', tooltipText: 'Underline'
                },
                {
                    prefixIcon: 'e-italic-icon tb-icons', tooltipText: 'Italic'
                },
                {
                    prefixIcon: 'e-color-icon tb-icons', tooltipText: 'Color-Picker'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-alignleft-icon tb-icons', tooltipText: 'Align-Left'
                },
                {
                    prefixIcon: 'e-alignright-icon tb-icons', tooltipText: 'Align-Right'
                },
                {
                    prefixIcon: 'e-aligncenter-icon tb-icons', tooltipText: 'Align-Center'
                },
                {
                    prefixIcon: 'e-alignjustify-icon tb-icons', tooltipText: 'Align-Justify'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-bullets-icon tb-icons', tooltipText: 'Bullets'
                },
                {
                    prefixIcon: 'e-numbering-icon tb-icons', tooltipText: 'Numbering'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-ascending-icon tb-icons', tooltipText: 'Sort A - Z'
                },
                {
                    prefixIcon: 'e-descending-icon tb-icons', tooltipText: 'Sort Z - A'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-upload-icon tb-icons', tooltipText: 'Upload'
                },
                {
                    prefixIcon: 'e-download-icon tb-icons', tooltipText: 'Download'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-indent-icon tb-icons', tooltipText: 'Text Indent'
                },
                {
                    prefixIcon: 'e-outdent-icon tb-icons', tooltipText: 'Text Outdent'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-clear-icon tb-icons', tooltipText: 'Clear'
                },
                {
                    prefixIcon: 'e-reload-icon tb-icons', tooltipText: 'Reload'
                },
                {
                    prefixIcon: 'e-export-icon tb-icons', tooltipText: 'Export'
                },
                {
                    type: 'Separator'
                },
                {
                    prefixIcon: 'e-radar-icon tb-icons', tooltipText: 'Radar Chart'
                },
                {
                    prefixIcon: 'e-bubble-icon tb-icons', tooltipText: 'Bubble Chart'
                },
                {
                    prefixIcon: 'e-line-icon tb-icons', tooltipText: 'Line Chart'
                }
            ]

        });
        //Render initialized Toolbar component
        toolbarObj.appendTo('#toolbar_default');
    }
    if ($("#fileupload").length) {
        var dropElement = document.getElementById('upload-area');
        var preloadFiles = [
            { name: 'TypeScript Succintly', size: 12000, type: '.pdf' },
            { name: 'ASP.NET Webhooks', size: 500000, type: '.docx' },
        ];
        var uploadObj = new ej.inputs.Uploader({
            asyncSettings: {
                saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
            },
            autoUpload: false,
            files: preloadFiles,
            removing: onRemove,
            success: onUploadSuccess,
            dropArea: dropElement
        });
        uploadObj.appendTo('#fileupload');
    }
    function onRemove(args) {
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.filesData[0].name + '"]');
        if (li.classList.contains('e-icon-spinner')) {
            return;
        }

    }
    function onUploadSuccess(args) {
        var _this = this;
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        if (args.operation === 'upload') {
            li.querySelector('.e-file-delete-btn').onclick = function () {

            };
            li.querySelector('.e-file-delete-btn').onkeydown = function (e) {
                if (e.keyCode === 13) {

                }
            };
        }
        else {
            ej.popups.hideSpinner(this.uploadWrapper);
            ej.base.detach(this.uploadWrapper.querySelector('.e-spinner-pane'));
        }
    }

    // context-menu coding
    if ($("#contextmenuComponent").length) {
        var menuItems = [
            {
                text: 'Cut',
                iconCss: 'e-cm-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss: 'e-cm-icons e-copy'
            },
            {
                text: 'Paste',
                iconCss: 'e-cm-icons e-paste',
                items: [
                    {
                        text: 'Paste Text',
                        iconCss: 'e-cm-icons e-pastetext'
                    },
                    {
                        text: 'Paste Special',
                        iconCss: 'e-cm-icons e-pastespecial'
                    }
                ]
            },
            {
                separator: true
            },
            {
                text: 'Link',
                iconCss: 'e-cm-icons e-link'
            },
            {
                text: 'New Comment',
                iconCss: 'e-cm-icons e-comment'
            }
        ];

        //ContextMenu model definition
        var menuOptions = {
            target: '#contextmenuComponent',
            items: menuItems,
            // Event triggers while rendering each menu item where �Link� menu item is disabled
            beforeItemRender: function (args) {
                if (args.item.text === 'Link') {
                    args.element.classList.add('e-disabled');
                }
            }
        };

        var menuObj = new ej.navigations.ContextMenu(menuOptions, '#contextmenu');
        if (ej.base.Browser.isDevice) {
            ej.base.select('#contextmenuComponent').textContent = 'Touch hold to open the ContextMenu';
            menuObj.animationSettings.effect = 'ZoomIn';
        }
        else {
            ej.base.select('#contextmenuComponent').textContent = 'Right click/Touch hold to open the ContextMenu';
            menuObj.animationSettings.effect = 'SlideDown';
        }
    }
    //tool tip component render
    if ($("#component-tooltip").length) {
        //Initialize Button component
        var button = new ej.buttons.Button();

        //Render initialized Button component
        button.appendTo('#component-tooltip');

        //Initialize Tooltip component
        var tooltip = new ej.popups.Tooltip({

            //Set tooltip content
            content: 'Lets go green & Save Earth !!!'

        });

        //Render initialized Tooltip component
        tooltip.appendTo('#component-tooltip');
    }
    //tooltip for filter
    var next = new ej.popups.Tooltip({
        content: 'Filter'
    });

    next.appendTo('#filters');
    var next = new ej.popups.Tooltip({
        content: 'Import'
    });

    next.appendTo('#imports');
    //check box
    var next = new ej.popups.Tooltip({
        content: "If  include compatibility css option is checked, it will generate compatiblity  css files.  " +

        "Using these compatiblity theme files you can render both Essential JS 1 and Essential JS 2 components in a single page."
    });
    next.appendTo('#import');
    //render colorpicker components
    if ($("#component-color-picker").length) {
        var defaultObj = new ej.inputs.ColorPicker({}, '#component-color-picker');
    }

    //render switch components
    if ($("#switch-checked").length) {
        var switchObj = new ejs.buttons.Switch({ checked: true });
        switchObj.appendTo('#switch-checked');
    }
    if ($('#switch-unchecked').length) {
        switchObj = new ejs.buttons.Switch({});
        switchObj.appendTo('#switch-unchecked');
    }
    //render toast
    if ($('#component-toast').length) {
        let prevDuplicates = false;
        var toastObj = new ej.notifications.Toast({
            title: 'Anjolie Stokes',
            content: '<p><img src="http://npmci.syncfusion.com/production/documentation/samples/toast/actionBtn-cs1/laura.png"></p>',
            position: { X: "Center", Y: "Bottom" },
            width: 230,
            height: 250,
            maxcount:1,
            target: '#element',
            buttons: [{
                model: { content: "Ignore" }, click: btnClick
            }, {
                model: { content: "reply" }
                }],
            beforeOpen: onBeforeOpen
        });

        //Render initialized Toast component
        toastObj.appendTo('#component-toast');

        ele = document.getElementById('toastBtnShow');

        ele.onclick = function () {
            
            
                toastObj.show();
        };

        function btnClick(e) {
            let toastEle = ej.base.closest(e.target, '.e-toast');
            toastObj.hide(toastEle);
        }
        function onBeforeOpen(e) {
            e.cancel = preventDuplicate(e);
        }
        function preventDuplicate(e) {
            let toastEle = e.element;
            let toasts = e.toastObj.element.children;
            for (let i = 0; i < toasts.length; i++) {
                if (toasts[i].querySelector('.e-toast-title').isEqualNode(toastEle.querySelector('.e-toast-title'))) {
                    return true;
                }
            }
            return false;
        }
    }
    
}

function overlay(IsThemeSwitch) {
    if (IsThemeSwitch) {
        ej.base.select('.cont-container').classList.add('theme-hide');
        ej.base.select('.rightpanel').classList.add('theme-hide');
    }

    themeBodyLeftOverlay.classList.remove('theme-hide');
    ej.base.select('.cont-container').classList.add('.click-events');
}

function removeOverlay(IsThemeSwitch) {
    if (!themeBodyLeftOverlay.classList.contains('theme-hide')) {
        if (IsThemeSwitch) {
            ej.base.select('.cont-container').classList.remove('theme-hide');
            ej.base.select('.rightpanel').classList.remove('theme-hide');
        }
        themeBodyLeftOverlay.classList.add('theme-hide');
        ej.base.select('.cont-container').classList.remove('.click-events');
    }
}

function renderDialogs() {
    // rendering filter dialog
    $('.theme-filter-header').hide();
    var template = ej.base.select('#filter-content-template');
    var confirmContent = template.innerHTML;
    template.parentElement.removeChild(template);
    filterDialog = new ej.popups.Dialog({
        visible: false,
        content: `<div id ="filter-dialogs">
                    <div class = "filter-header">
                        <span class = "header-content" > Filter </span>
                         <div class="filter-dialog-close" onclick="filtering(false)"><span class="e-icons close-icon "></span></div>
                    </div>`+ confirmContent + `</div>
                         <div id = "filter-buttons">   
                             <button type="button" class="btn btn-primary" id = "Apply" onclick="filtering(true)">APPLY</button>
                              <button type="button" class="btn btn-default" id="cancel-filter" onclick="filtering(false)">CANCEL</button>
                            </div>`,
        modal: true,

        width: '50%',
        target: document.body,
        isModal: true,
        animationSettings: {
            effect: 'None'
        }
    });
    filterDialog.appendTo('#filterDialog');
    // rendering export dialog
    exportDialog = new ej.popups.Dialog({
        visible: false,
        modal: true,
        content: `<div id ="export-dialogs">
                    <div class = "headers">
                        <span class = "header-content" > Download </span>
                         <div class="filter-dialog-close" onclick="exporting(false)"><span class="e-icons close-icon "></span></div>
                    </div>
                   <div class="form-group">
                     <label for="inputdefault" id="input-font">File Name</label>
                     <input class="form-control form-control-sm" id="inputdefault" type="text" > 
                   </div>
                  <div class="download-options" style="display:none" id="downloads-info">
                    <div class="include-css">
                        <input id="ts-checkbox" type="checkbox" value="compatibility">
                         
                    </div>
                    <div class="comp-info"id = "import">
                       <span class="e-icons sb-compatable-info sb-icons" ></span>
                    </div>
                  </div>
                 </div>
                 <div id = "export-buttons">
                     <button type="button" class="btn btn-primary" id = "Download" onclick="exporting(true)">DOWNLOAD</button>
                     <button type="button" class="btn btn-default" id ="export-cancel" onclick="exporting(false)">CANCEL</button>
               <div>`,
        width: '330px',
        isModal: true,

        target: document.body,
        animationSettings: { effect: 'None' }
    });
    exportDialog.appendTo('#export-dialog');
    document.getElementById("inputdefault").value = curTheme;

    //render import dialog 
    importDlg = new ej.popups.Dialog({

        visible: false,
        width: '300px',
        target: document.body,
        modal: true,
        isModal: true,
        animationSettings: {
            effect: 'None'
        }
    });
    importDlg.appendTo('#import-dialog');
    document.getElementById('imports').onclick = function () {
        document.getElementById('imports').classList.add('actives');
        document.getElementById('contents').style.display = '';
        document.getElementById("import-Download").disabled = true;
        importDlg.show();
    };
    ej.base.L10n.load({
        'en-US': {
            'uploader': {
                dropFilesHint: 'Select theme file'
            }
        }
    })
    var uploadObjs = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        allowedExtensions: '.json',
        removing: onRemove,
        success: onUploadSuccess,
        dropArea: document.getElementById('dropArea'),
        locale: 'en-US'

    });
    function onRemove(args) {
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.filesData[0].name + '"]');
        if (li.classList.contains('e-icon-spinner')) {
            return;
        }
        document.getElementById("import-Download").disabled = true;

    }
    function onUploadSuccess(args) {
        var _this = this;
        var li = this.uploadWrapper.querySelector('[data-file-name="' + args.file.name + '"]');
        if (args.operation === 'upload') {
            li.querySelector('.e-file-delete-btn').onclick = function () {

            };
            li.querySelector('.e-file-delete-btn').onkeydown = function (e) {
                if (e.keyCode === 13) {

                }
            };
            document.getElementById("import-Download").disabled = false;
        }
        else {
            ej.popups.hideSpinner(this.uploadWrapper);
            ej.base.detach(this.uploadWrapper.querySelector('.e-spinner-pane'));
        }

    }


    uploadObjs.appendTo('#fileuploads');

}

function exporting(boolean) {
    if (boolean) {
        var components = [];
        componentsId = [];
        var checked = ej.base.selectAll('.theme-filter-body input:checked');
        for (var comp of checked) {
            if (comp.id.indexOf('cat') == -1) {
                var compName = comp.id;
                componentsId.push(compName);
                compName = compName.replace("comp-", "");
                compName = compName === 'textbox' ? 'input' : compName;
                components.push(compName);
            }


        }
        var compatibility = document.getElementById("ts-checkbox").checked; // check compatibility css required or not
        var fileElement = document.getElementById("inputdefault");
        var filename = fileElement.value;
        getdependency(components);


        if (colorchange) {
            colorchange['theme'] = window.themes;
            colorchange['file'] = filename;
            colorchange.properties = themeColors[window.themes];
            colorchange['components'] = componentsId;
            colorchange['compatiblity'] = compatibility;
        }
        colorchange["dependency"] = window.dependency_arr;
        themeBodyLeftOverlay.style.backgroundColor = "#383838";
        overlay(false);
        var ajax = new ej.base.Ajax({
            type: "POST",
            url: "Home/export",
            contentType: 'application/json; charset=utf-8',
            processData: false,
            data: JSON.stringify({ exporting: colorchange }) // Note it is important
        }, 'POST', true);
        ajax.send();
        ajax.onSuccess = function (data) {
            var download = ej.base.select('#downloadlink');
            download.href = data;
            download.click();
            removeOverlay(false);
            themeBodyLeftOverlay.style.backgroundColor = "transparent";

        }

    }
    exportDialog.hide();
}

// Rendering theme properties elements
function renderProperties(themeName) {
    ej.base.enableRipple(false);
    var properties = window.themeProps[themeName];
    var keys = Object.keys(properties);
    document.getElementById('theme-properties').innerHTML = "";
    for (var i = 0; i < keys.length; i++) {
        var property = properties[keys[i]];
        var wrapper = new ej.base.createElement('div', { className: 'theme-prop-wrapper', attrs: { 'data-id': property.id } });
        var labelElement = new ej.base.createElement('div', { className: 'f-left theme-property', innerHTML: '<span>' + keys[i] + '</span' });
        clrpkrWrapper = new ej.base.createElement('div', { className: 'f-right theme-value', innerHTML: `<input type="color" class="color-picker ${property.id}" />` });
        wrapper.appendChild(labelElement);
        wrapper.appendChild(clrpkrWrapper);
        document.getElementById('theme-properties').appendChild(wrapper);
        var obj = new ej.inputs.ColorPicker({
            mode: 'Palette',
            value: property.default,
            inline: false,
            showButtons: true,
            cssClass: 'e-themestudio-colorpicker',
            modeSwitcher: true,
            columns: 6,
            presetColors: {
                'custom': property.palettes
            },
            beforeTileRender: (args) => {
                args.element.classList.add('e-circle-palette');
                args.element.appendChild(new ej.base.createElement('span', { className: 'e-circle-selection' }));
                var value = args.element.getAttribute("aria-label");
                if (value === "#ffffff") {
                    args.element.classList.add('white-colorpattle')
                }
            },
            beforeOpen: function (args) {
            },
            open: function (args) {
                
            },
           
            change: function (args) {
                var element = this.element.closest('.theme-prop-wrapper');
                var value = args.currentValue.rgba;
                var colorEle = this.getWrapper().querySelector('.theme-color');
                var colorchange = change(themeName, element.getAttribute('data-id'), value);
                var controlSection = document.getElementById('control-section');
                var scrollTop = controlSection.scrollTop;
                themeBodyLeftOverlay.style.backgroundColor = "#383838";
                overlay(false);
                var ajax = new ej.base.Ajax({
                    type: "POST",
                    url: "Home/ThemeChange",
                    contentType: 'application/json; charset=utf-8',
                    processData: false,
                    data: JSON.stringify({ color: colorchange }) // Note it is important
                }, 'POST', true);
                ajax.send();
                ajax.onSuccess = function (data) {
                    var styles = document.getElementById('custom-theme');
                    styles.innerHTML = data;
                    colorEle.style.backgroundColor = value;

                    removeOverlay(false);
                    themeBodyLeftOverlay.style.backgroundColor = "transparent";
                    controlSection.scrollTop = scrollTop;
                }
            }
        }, '.color-picker.' + property.id);
    }
    if (themeName === 'material') {
        ej.base.enableRipple(true);
    }
}

/* change the color values */
function change(theme, property, color) {
    var colorObj = {};
    colorObj['theme'] = theme;
    colorObj.properties = themeColors[theme];
    colorObj.properties['$' + property] = color;
    return colorObj;
}

/* load theme */
function loadTheme(theme) {
    overlay(true);
    if (theme === 'highcontrast') {
        document.body.classList.add('themestudio-highcontrast');
    } else {
        document.body.classList.remove('themestudio-highcontrast');
    }
    document.getElementById("inputdefault").value = theme;
    loadDefaultThemes(theme, true);
    colorpicker();

}

function destroyControls() {
    var elementlist = ej.base.selectAll('.e-control', document.getElementById('control-section'));
    for (var i = 0; i < elementlist.length; i++) {
        var control = elementlist[i];
        if (control.ej2_instances) {
            for (var a = 0; a < control.ej2_instances.length; a++) {
                var instance = control.ej2_instances[a];
                if (!instance.isDestroyed)
                    instance.destroy();
            }
        }
    }
}

//Filtering Script Start
var checkBoxObj = new ej.buttons.CheckBox({
    label: 'Include compatibility css'
});
checkBoxObj.appendTo('#ts-checkbox');

document.getElementById('filters').onclick = function () {
    document.getElementById('filters').classList.add('actives');
    filterDialog.show();
};
document.getElementById('download-now').onclick = function () {
    exportDialog.show();
    document.getElementById('downloads-info').style.display = '';
};
var selectAll = new ej.buttons.CheckBox({
    label: 'Select all',
    checked: false,
    change: selectAllState
});
selectAll.appendTo('#filter-selectall');

var catchbxs = ej.base.selectAll('.theme-filter-body .cat-chbx input');
var compchbxs = ej.base.selectAll('.theme-filter-body .comp-chbx input');

var qsData = [];
var fsData = {
    comps: [],
    compCat: {}
};

for (var catDiv of catchbxs) {
    qsData.push({
        name: catDiv.getAttribute('value'),
        code: catDiv.id
    });
    for (var compcb of ej.base.selectAll('[data="' + catDiv.id + '"] input')) {
        fsData.comps.push({
            name: compcb.value
        });
        fsData.compCat[compcb.value] = catDiv.id;
    }
}

var selectAllDiv = ej.base.select('.theme-filter-selectall');
var fsDmData = new ej.data.DataManager(fsData.comps);

for (var catchbx of catchbxs) {
    createCheckBox(catchbx, true);
}

for (var compchbx of compchbxs) {
    createCheckBox(compchbx, false);
}

function createCheckBox(elem, catComp) {
    var checkbox = new ej.buttons.CheckBox({
        label: elem.value,
        checked: false,
        change: catComp ? catCheck : compCheck
    });
    checkbox.appendTo(elem);
}

function catCheck(args) {
    setCheckBoxState(ej.base.select('[data=' + args.event.currentTarget.id + ']').querySelectorAll('input'), args.checked);
    getSelectAllState();
}

function compCheck(args) {
    var compDiv = ej.base.closest(args.event.currentTarget, '.comp-chbx');
    var catChbx = ej.base.select('.cat-chbx #' + compDiv.getAttribute('data')).ej2_instances[0];
    var check = getCheckboxState(compDiv.querySelectorAll('input'));
    catChbx.checked = check.check;
    catChbx.indeterminate = check.int;
    getSelectAllState();
}

function getCheckboxState(chbxs) {
    var tCheck = chbxs.length;
    var checkTrue = 0;
    for (var chbx of chbxs) {
        if (chbx.ej2_instances[0].checked) {
            ++checkTrue;
        }
    }
    if (checkTrue === 0) {
        return {
            check: false,
            int: false
        };
    } else if (checkTrue === tCheck) {
        return {
            check: true,
            int: false
        };
    } else {
        return {
            check: false,
            int: true
        };
    }
}

function setCheckBoxState(chbxs, check) {
    for (var chbx of chbxs) {
        chbx.ej2_instances[0].checked = check;
    }
}

function getSelectAllState() {
    var chbxs = ej.base.selectAll('.comp-chbx input');
    var tCheck = chbxs.length;
    var checkTrue = 0;
    for (var chbx of chbxs) {
        if (chbx.ej2_instances[0].checked)
            ++checkTrue
    }
    if (checkTrue === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
        document.getElementById("Apply").disabled = true;
    } else if (checkTrue === tCheck) {
        selectAll.indeterminate = false;
        selectAll.checked = true;
        document.getElementById("Apply").disabled = false;
    } else {
        selectAll.checked = false;
        selectAll.indeterminate = true;
        document.getElementById("Apply").disabled = false;
    }

}

function selectAllState(args) {
    var boolean = args.checked;
    for (let chbx of ej.base.selectAll('.theme-filter-body .cat-chbx [aria-checked="mixed"] input')) {
        chbx.ej2_instances[0].indeterminate = undefined;

    }
    for (let chbx of ej.base.selectAll('.theme-filter-body input')) {
        chbx.ej2_instances[0].checked = args.checked;

    }
    if (boolean) {
        document.getElementById("Apply").disabled = false;
    }
    else {
        document.getElementById("Apply").disabled = true;
    }
}
selectAllState({ checked: true });
getSelectAllState();

function quickfilter(args) {
    selectAllState({
        checked: false
    });
    getSelectAllState();
    var cats = args.value;
    for (var chbx of catchbxs) {
        var id = chbx.id;
        ej.base.closest(ej.base.select('#' + id), '.cat-chbx').classList.remove('filter-hide');
        ej.base.select('[data="' + id + '"]').classList.remove('filter-hide');
        for (var chx of ej.base.selectAll('[data="' + id + '"] div.e-checkbox-wrapper')) {
            chx.classList.remove('filter-hide');
        }
    }
    selectAllDiv.classList.remove('filter-hide');
    if (cats.length !== 0) {
        selectAllDiv.classList.add('filter-hide');
        for (var chbx of catchbxs) {
            var id = chbx.id;
            if (cats.indexOf(id) !== -1) {
                ej.base.closest(ej.base.select('#' + id), '.cat-chbx').classList.remove('filter-hide');
                ej.base.select('[data="' + id + '"]').classList.remove('filter-hide');
                var catgeoryChbx = $('#' + id)[0]
                if (!catgeoryChbx.ej2_instances[0].checked) {
                    catgeoryChbx.click();
                }
            } else {
                ej.base.closest(ej.base.select('#' + id), '.cat-chbx').classList.add('filter-hide');
                ej.base.select('[data="' + id + '"]').classList.add('filter-hide');
            }
        }
    }
}

Array.prototype.diff = function (a1) {
    return this.filter(function (a2) {
        return a1.indexOf(a2) === -1;
    });
};

function filterSearch(value) {

    selectAllState({
        checked: false
    });
    getSelectAllState();
    var filterComps = [];
    quickfilter({
        value: ''
    });
    var selCats = [];
    if (value) {
        selectAllDiv.classList.add('filter-hide');
        var selComps = fsDmData.executeLocal(new ej.data.Query().where('name', 'contains', value, true));
        filterComps = fsData.comps.diff(selComps);
        for (var selComp of selComps) {
            var selCat = fsData.compCat[selComp.name];
            if (selCats.indexOf(selCat) === -1)
                selCats.push(selCat);
        }
    } else {
        return;
    }
    for (var fComp of filterComps) {
        var val = fComp.name;
        ej.base.closest(ej.base.select('.comp-chbx [value="' + val + '"]'), 'div.e-checkbox-wrapper').classList.add('filter-hide');
        if (selCats.indexOf(fsData.compCat[val]) === -1) {
            ej.base.closest(ej.base.select('#' + fsData.compCat[val]), '.cat-chbx').classList.add('filter-hide');
        }
    }
}
//Filtering Script End
var allcomps = [];
var checked = ej.base.selectAll('.theme-filter-body input');
for (var comp of checked) {
    allcomps.push(comp.id);


}

var catCard = {
    'grids': {
        'col-cards': { 'grid': null },
        'big-cards': {}
    },
    'calendar': {
        'col-cards': { 'calendar': null },
        'big-cards': { 'schedule': null }
    },
    'editors': {
        'col-cards': {
            'cat-editors': ['textbox', 'numerictextbox', 'maskedtextbox', 'slider'],
            'cat-pickers': ['datepicker', 'timepicker', 'datetimepicker', 'daterangepicker'],
            'cat-dropdown': ['auto-complete', 'drop-down-list', 'multi-select', 'combo-box'],
            'cat-button': ['button', 'drop-down-button', 'split-button','button-group'],
            'check-box': null,
            'radio-button': null,
            'uploader': null,
            'color-picker': null,
            'switch':null
        },
        'big-cards': []
    },
    'layout': {
        'col-cards': {
            'listview': null,
            'tooltip': null
        },
        'big-cards': {
            'dialog': null
        }
    },
    'notification': {
        'col-cards': {
            'badge': null,
            'toast': null
        },
        'big-cards': {
            'dialog': null
        }
    },
    'navigation': {
        'col-cards': {
            'treeview': null,
            'toolbar': null,
            'accordion': null,
            'context-menu': null,
            'tab': null,
        },
        'big-cards': []

    }
}


var selectedComp = {};
var isfilterapplied = false;
var categs = {
    small: {
        compcard: {},
        card: {}
    },
    big: {}
};

var hcomp = [];
function filtering(boolean) {
    if (boolean) {
        var filterObj = {
            comps: { checked: [], unchecked: [] },
            cats: { checked: [], unchecked: [], intermediate: [] }
        };
        var selectall = ej.base.selectAll('.theme-filter-header .theme-filter-selectall input');
        if (selectall[0].ej2_instances[0].checked) {
            isfilterapplied = false;
            renderComponents();
            twocolumn_layout();
            filterDialog.hide();
            document.getElementById('filters').classList.remove('actives');
            return;
        }

        isfilterapplied = true;

        //Change-start
        var compCheckBoxes = ej.base.selectAll('.theme-filter-body .comp-chbx input');
        var catCheckBoxes = ej.base.selectAll('.theme-filter-body .cat-chbx input');
        for (let compcbx of compCheckBoxes) {
            var compName = compcbx.id.slice(5);
            if (compcbx.ej2_instances[0].checked) {
                filterObj.comps.checked.push(compName);
            } else {
                filterObj.comps.unchecked.push(compName);
            }
        }
        for (let catcbx of catCheckBoxes) {
            var catName = catcbx.id.slice(6);
            var catElements = catcbx.ej2_instances[0].element.parentElement.querySelector('.e-frame');
            if (catElements.classList.contains('e-stop') || catcbx.ej2_instances[0].indeterminate) {
                filterObj.cats.intermediate.push(catName);
            } else if (catcbx.ej2_instances[0].checked) {
                filterObj.cats.checked.push(catName);
            } else {
                filterObj.cats.unchecked.push(catName);
            }
        }
        hcomp = [];
        categs.small.compcard = [];
        categs.small.card = [];
        categs.big = {};
        getCheckedCategories(filterObj.cats.checked, filterObj.comps, true);
        getCheckedCategories(filterObj.cats.intermediate, filterObj.comps, false);
        generatefilterhtml();

    }

    document.getElementById('filters').classList.add('actives');
    filterDialog.hide();
    document.getElementById('filters').classList.remove('actives');
}



function getCheckedCategories(categories, comps, ischecked) {

    for (let category of categories) {
        var catinfo = catCard[category];
        var smallcards = catinfo['col-cards'];
        Object.keys(smallcards).forEach((smallcard) => {
            var scardvalue = smallcards[smallcard];
            if (scardvalue === null) {
                if (comps.checked.includes(smallcard)) {
                    categs.small.card[smallcard] = scardvalue;
                }
            }
            else if (scardvalue instanceof Array && scardvalue.length > 0) {
                categs.small.compcard[smallcard] = {
                    checked: [],
                    unchecked: []
                }
                if (ischecked) {
                    categs.small.compcard[smallcard].checked = scardvalue;
                }
                else {
                    scardvalue.forEach((compname) => {
                        if (comps.checked.includes(compname)) {
                            categs.small.compcard[smallcard].checked.push(compname);
                        }
                        else {
                            categs.small.compcard[smallcard].unchecked.push(compname);
                        }
                    });
                }
            }
        });
        var bigcards = catinfo['big-cards'];
        Object.keys(bigcards).forEach((bigcard) => {
            var bcardvalue = bigcards[bigcard];
            if (bcardvalue === null) {
                if (comps.checked.includes(bigcard)) {
                    categs.big[bigcard] = bcardvalue;
                }
            }
        });
    }
}

function generatefilterhtml() {
    var twocolumnCollection = ['grid', 'tab', 'toolbar']
    var count = 1;
    var smallhtml = {
        col1: '', col2: '', col3: ''
    }
    var bightml = '';
    var twocolhtml = '';
    Object.keys(categs.small.card).forEach((c) => {
        if (twocolumnCollection.indexOf(c) !== -1) {
            twocolhtml += cardsContent[c];
        } else {
            smallhtml[`col${count}`] = smallhtml[`col${count}`] + cardsContent[c];
            count = count === 3 ? 1 : ++count;
        }
    });
    Object.keys(categs.small.compcard).forEach((c) => {
        if (categs.small.compcard[c].checked.length > 0) {
            smallhtml[`col${count}`] = smallhtml[`col${count}`] + cardsContent[c];
            count = count === 3 ? 1 : ++count;
            hcomp = hcomp.concat(categs.small.compcard[c].unchecked);
        }
    });

    Object.keys(categs.big).forEach(c => {
        bightml = bightml + cardsContent[c];
    });
    destroyControls();
    $('#col-1').html(smallhtml.col1);
    $('#col-2').html(smallhtml.col2);
    $('#col-3').html(smallhtml.col3);
    $('#big-control').html(bightml);
    $('#two-column-control').html(twocolhtml);
    renderComponents();
    //twocolumn_layout();
    $(hcomp.map(h => `#${h}`).join(',')).hide();
}

/* style dependency methods for exporting starting */
function getdependency(comp_array) {
    var styles = "";
    var resource = "";
    var theme = "";
    window.dependency_arr = [];
    theme = themeDeps(comp_array, window.dependentCollection["styles"], window.dependentCollection["resources"]);
    var packs = Object.keys(theme.compPack);
    dependency_arr = ['base'];
    var selectComparray = [];
    var colorpickercomponent = [];
    for (var pack of packs) {

        for (var comp of theme.compPack[pack]) {
            if (comp_array.indexOf(comp) !== -1) {
                var styledependency = pack + '/' + (comp === 'listview' ? 'list-view' : comp);
                selectComparray.push(styledependency)
            }
            else {
                if (comp === "color-picker" && window.dependency_arr.indexOf('button') === -1) {
                    var styledependency = pack + '/' + comp;
                    colorpickercomponent.push(styledependency);
                } else {
                    var styledependency = pack + '/' + (comp === 'listview' ? 'list-view' : comp);
                    window.dependency_arr.push(styledependency);
                }

            }

        }
    }
    window.dependency_arr = window.dependency_arr.concat(selectComparray);
    window.dependency_arr = window.dependency_arr.concat(colorpickercomponent);



}
var packMapper = { "listview": "lists", "tooltip": "popups", "badge": "notifications", "toast": "notifications", "button-group": "splitbuttons","input":"inputs"};
function themeDeps(comps, styles, resources) {
    var theme = {
        packs: [],
        compPack: {},
        allPack: []
    };
    var pack = '';
    var deps = [];
    for (var comp of comps) {
        var packValue = packMapper[comp];
        if (packValue) {
            pack = packValue;
        } else {
            pack = name(resources[comp].package);
        }
        theme = themeProcess(comp, pack, theme, styles);
    }
    return theme;
}

function styleDeps(deps, styles, theme, packName) {
    var pack = '';
    var compName = '';
    for (var dep of deps) {
        var depSplit = dep.split('/');
        if (depSplit[0].indexOf('ej2-') !== -1) {
            if (depSplit.length === 2) {
                pack = name(depSplit[0]);
                compName = depSplit[1];
                theme = themeProcess(compName, pack, theme, styles);
            } else if (depSplit.length === 1) {
                pack = name(dep);
                var comps = styles[pack] ? Object.keys(styles[pack]) : [];
                for (var comp of comps) {
                    theme = themeProcess(comp, pack, theme, styles);
                }
                theme.allPack.push(pack);
            }
        } else if (dep.indexOf('../') !== -1) {
            compName = dep.replace(/(\.\/\.\.\/)|(\.\.\/)/, '');
            theme = themeProcess(compName, packName, theme, styles);
        }
    }
    return theme;
}

function themeProcess(comp, pack, theme, styles) {
    var deps = [];
    if (theme.packs.indexOf(pack) === -1) {
        theme.packs.push(pack);
    }
    if (theme.allPack.indexOf(pack) === -1) {
        if (!theme.compPack[pack]) {
            theme.compPack[pack] = [];
        }
        if (theme.compPack[pack].indexOf(comp) === -1) {
            theme.compPack[pack].push(comp);
            if (styles[pack]) {
                deps = styles[pack][comp];
                if (deps ? deps.length !== 0 : false) {
                    theme = styleDeps(deps, styles, theme, pack);
                }
            }
        }
    }
    return theme;
}

function name(input, bool) {
    if (bool) {
        return input.replace('-').toLowerCase();
    }
    return input.replace(/(ej2-|-)/g, '');
}


/* style dependency ending */


/*importing method */

function importing(boolean) {
    if (boolean) {
        var filecontents;
        var components = [];
        var i = 0;
        var fileElement = document.getElementById("fileuploads");
        var fileread = new FileReader();
        if (!fileElement.files || !fileElement.files[0]) {
            return;
        }
        fileread.readAsText(fileElement.files[0]);
        fileread.onload = function () {
            filecontents = JSON.parse(fileread.result);
            //this.hide();
            var properties = JSON.parse(filecontents.properties);
            components = JSON.parse(filecontents.components);
            var key = Object.keys(properties);
            var element = document.getElementById('theme-properties');
            var colorElement = element.querySelectorAll('.theme-color');
            selectAllState({ checked: false });
            getSelectAllState();
            for (var i = 0; i < components.length; i++) {
                var componentChbx = $('#' + components[i])[0]
                if (!componentChbx.ej2_instances[0].checked) {
                    componentChbx.click();
                }
            }

            filtering(true);
            filecontents["properties"] = properties;
            var controlSection = document.getElementById('control-section');
            var scrollTop = controlSection.scrollTop;
            themeBodyLeftOverlay.style.backgroundColor = "#383838";
            overlay(false);
            var ajax = new ej.base.Ajax({
                type: "POST",
                url: "Home/ThemeChange",
                contentType: 'application/json; charset=utf-8',
                processData: false,
                data: JSON.stringify({ color: filecontents }) // Note it is important
            }, 'POST', true);
            ajax.send();
            ajax.onSuccess = function (data) {
                var styles = document.getElementById('custom-theme');
                styles.innerHTML = data;
                for (i = 0; i < colorElement.length; i++) {
                    colorElement[i].style.backgroundColor = properties[key[i]];
                }
                removeOverlay(false);
                themeBodyLeftOverlay.style.backgroundColor = "transparent";
                controlSection.scrollTop = scrollTop;
            }
        }

    }
    importDlg.hide();
    document.getElementById('imports').classList.remove('actives');

}

/* importing method end */

/* quick filter */
/* two column component render */
function twocolumn_layout() {
    var col2_element = $('#col-2').children();
    var col3_element = $('#col-3').children();
    var j = 0;
    k = 0;
    for (var i = 0; i < col2_element.length; i++) {
        if (col2_element[i].classList.contains("two-column")) {
            var secondcolumComponentId = col2_element[i].id;
            var id = '#' + secondcolumComponentId;
            var secondColumnheight = $(id).height();
            var height = secondColumnheight + 30;
            height = height + 'px';

            if (i < col3_element.length) {

                var thirdColumnelementId = col3_element[((i - j) + k)].id;
                document.getElementById(thirdColumnelementId).style.marginTop = height;
                k = 1;
            }
          
        }
        else {
            j++;
        }
    }
}
$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        filterDialog.hide();
        exportDialog.hide();
        importDialog.hide();
    }
})

function colorpicker() {
    var themeElement = document.getElementById('theme-properties')
    var element = themeElement.querySelectorAll('.e-colorpicker-wrapper');
    for (var i = 0, len = element.length; i < len; i++) {
        var ele = element[i];
        var cl = ele.querySelectorAll('button')[1];
        cl.classList = '';
        cl.classList.add('theme-color-picker-override');
        cl.children[0].classList = 'theme-color';
        var colorele = element[i].querySelector('input');
        cl.children[0].style.backgroundColor = colorele.ej2_instances[0].value;
    }
}