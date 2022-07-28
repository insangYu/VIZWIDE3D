class Panel {
    /**
     * Panel 생성
     * @param {Object} element HTML Element
     * @example
     * let view = document.getElementById("view");
     * let panel = new vizwide3d.Panel(view);
     */
    constructor(rootPanel, defaultColor) {
        let scope = this;
        // UI Element 관리
        this.Element = {
            Panel: undefined,
            Title: {
                Text: undefined
            },
            CloseButton: undefined,
            Content: {
                Element: undefined
            }
        };

        let init = function (){
            makeDiv();
            closeBtnClick();
            movePanel();
        };
        init();
        
        // Init
        // this.Init = function () {
        //     makeDiv();
        //     closeBtnClick();
        //     movePanel();
        // };

        // GUID 생성
        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        // 앨리먼트 생성
        function makeDiv() {
            let panel = document.createElement('div');
            panel.id = guid();
            panel.className = "panel";
            rootPanel.appendChild(panel);

            scope.Element.Panel = panel;

            let title = document.createElement('div');
            title.id = guid();
            title.className = "title";
            scope.Element.Panel.appendChild(title);

            scope.Element.Title = title;

            let titleText = document.createElement('div');
            titleText.id = guid();
            titleText.className = "titleText";
            scope.Element.Title.appendChild(titleText);

            scope.Element.Title.Text = titleText;

            let closeBtn = document.createElement('div');
            closeBtn.id = guid();
            closeBtn.className = "closeBtn closeBtn-icon";
            scope.Element.Title.appendChild(closeBtn);

            scope.Element.CloseButton = closeBtn;

            let content = document.createElement('div');
            content.id = guid();
            content.className = "content";
            scope.Element.Panel.appendChild(content);

            scope.Element.Content = content;
        }

        // X버튼 클릭 시 패널 display:none
        function closeBtnClick() {
            scope.Element.CloseButton.addEventListener("click", function () {
                scope.Element.Panel.style.display = "none";
            });
        }

        // 패널 Move
        function movePanel() {
            scope.Element.Title.addEventListener("mousedown", mouseDown);
            function mouseDown(e) {
                // mousemove, mouseup 이벤트 추가
                scope.Element.Title.addEventListener("mousemove", mouseMove);
                scope.Element.Title.addEventListener("mouseup", mouseUp);
                scope.Element.Title.addEventListener("mouseout", mouseOut);
                let prevX = e.clientX;
                let prevY = e.clientY;

                function mouseMove(e) {
                    // console.log('mousemove');
                    let newX = prevX - e.clientX;
                    let newY = prevY - e.clientY;

                    // panel 위치 조정
                    let panel = scope.Element.Panel;
                    let rect = panel.getBoundingClientRect();
                    if (rect.left - newX < 0) {
                        panel.style.left = "0px";
                        panel.style.top = rect.top - newY + "px";
                    }
                    else if (rect.top - newY < 0) {
                        panel.style.top = "0px";
                        panel.style.left = rect.left - newX + "px";
                    }
                    else if (rect.right - newX > innerWidth) {
                        panel.style.top = rect.top - newY + "px";
                        panel.style.left = innerWidth - rect.width + "px";
                    }
                    else if (rect.bottom - newY > innerHeight) {
                        panel.style.top = innerHeight - rect.height + "px";
                        panel.style.left = rect.left - newX + "px";
                    }
                    else {
                        panel.style.top = rect.top - newY + "px";
                        panel.style.left = rect.left - newX + "px";
                    }

                    prevX = e.clientX;
                    prevY = e.clientY;
                }

                function mouseOut() {
                    // console.log('mouseout');
                    // mousemove, mouseup 이벤트 삭제
                    scope.Element.Title.removeEventListener("mousemove", mouseMove);
                    scope.Element.Title.removeEventListener("mouseup", mouseUp);
                }

                function mouseUp() {
                    // console.log('mouseup');
                    // mousemove, mouseup 이벤트 삭제
                    scope.Element.Title.removeEventListener("mousemove", mouseMove);
                    scope.Element.Title.removeEventListener("mouseup", mouseUp);
                }
            }
        }

        // ----- Method

        /**
         * Panel 보이기/숨기기
         * @param {Boolean} visible 보이기/숨기기
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.Show();
         */
        this.Show = function (visible) {
            if (visible == true) {
                scope.Element.Panel.style.display = "block";
            }
            else {
                scope.Element.Panel.style.display = "none";
            }
        };

        /**
         * Panel 크기 설정
         * @param {Number} width 넓이
         * @param {Number} height 높이
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetSize(200, 300);
         */
        this.SetSize = function (width, height) {
            scope.Element.Panel.style.width = width + "px";
            scope.Element.Panel.style.height = height + "px";
        };

        /**
         * Panel 배경 색상 설정
         * @param {Object} color { r : 255, g : 255, b : 255, a : 255}
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetBorderColor({ r : 255, g : 255, b : 255, a : 255});
         */
        this.SetBorderColor = function (color) {
            scope.Element.Panel.style.borderColor = "rgba(" + color.r + "," + color.g + "," + color.b + "," + 255 / color.a + ")";
        };

        /**
         * Panel 배경 색상 설정
         * @param {Number} R Red(0~255)
         * @param {Number} G Green(0~255)
         * @param {Number} B Blue(0~255)
         * @param {Number} A Alpha(0~255)
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetBorderColorFromRGBA(255, 255, 255, 255);
         */
        this.SetBorderColorFromRGBA = function (R, G, B, A) {
            if (R === undefined || G === undefined || B == undefined || A == undefined) {
                scope.Element.Panel.style.borderColor = "rgba(" + defaultColor.r + "," + defaultColor.g + "," + defaultColor.b + "," + 255 / defaultColor.a + ")";
            }
            else {
                scope.Element.Panel.style.borderColor = "rgba(" + R + "," + G + "," + B + "," + 255 / A + ")";
            }
        };

        /**
         * Panel 위치 설정(Top)
         * @param {Number} offset Top Offset
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetLocationTop(10);
         */
        this.SetLocationTop = function (top) {
            scope.Element.Panel.style.top = top + "px";
        };

        /**
         * Panel 위치 설정(Left)
         * @param {Number} offset Left Offset
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetLocationLeft(10);
         */
        this.SetLocationLeft = function (left) {
            scope.Element.Panel.style.left = left + "px";
        };

        /**
         * Panel Title 설정
         * @param {String} text Title
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetTitleText("Title");
         */
        this.SetTitleText = function (text) {
            scope.Element.Title.Text.textContent = text;
        };

        /**
         * Panel Title 색상 설정
         * @param {Object} color { r : 255, g : 255, b : 255, a : 255}
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetTitleTextColor({ r : 255, g : 255, b : 255, a : 255});
         */
        this.SetTitleTextColor = function (color) {
            scope.Element.Title.Text.style.color = "rgba(" + color.r + "," + color.g + "," + color.b + "," + 255 / color.a + ")";
        };

        /**
         * Panel Title 색상 설정
         * @param {Number} R Red(0~255)
         * @param {Number} G Green(0~255)
         * @param {Number} B Blue(0~255)
         * @param {Number} A Alpha(0~255)
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetTitleTextColorFormRGBA(255,255,255,255);
         */
        this.SetTitleTextColorFormRGBA = function (R, G, B, A) {
            if (R === undefined || G === undefined || B == undefined || A == undefined) {
                scope.Element.Title.Text.style.color = "rgba(" + defaultColor.r + "," + defaultColor.g + "," + defaultColor.b + "," + 255 / defaultColor.a + ")";
            }
            else {
                scope.Element.Title.Text.style.color = "rgba(" + R + "," + G + "," + B + "," + 255 / A + ")";
            }
        };

        /**
         * Panel Title 배경 색상 설정
         * @param {Object} color { r : 255, g : 255, b : 255, a : 255}
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetTitleBackgroundColor({ r : 255, g : 255, b : 255, a : 255});
         */
        this.SetTitleBackgroundColor = function (color) {
            scope.Element.Title.style.backgroundColor = "rgba(" + color.r + "," + color.g + "," + color.b + "," + 255 / color.a + ")";
        };

        /**
         * Panel Title 색상 설정
         * @param {Number} R Red(0~255)
         * @param {Number} G Green(0~255)
         * @param {Number} B Blue(0~255)
         * @param {Number} A Alpha(0~255)
         * @example
         * let view = document.getElementById("view");
         * let panel = new vizwide3d.Panel(view);
         * panel.SetTitleBackgroundColorFormRGBA(255,255,255,255);
         */
        this.SetTitleBackgroundColorFormRGBA = function (R, G, B, A) {
            if (R === undefined || G === undefined || B == undefined || A == undefined) {
                scope.Element.Title.style.backgroundColor = "rgba(" + defaultColor.r + "," + defaultColor.g + "," + defaultColor.b + "," + 255 / defaultColor.a + ")";
            }
            else {
                scope.Element.Title.style.backgroundColor = "rgba(" + R + "," + G + "," + B + "," + 255 / A + ")";
            }
        };

        /**
         * Panel Content 설정
         * @param {Object} element HTML Element
         * @example
         * let view = document.getElementById("view");
         * let element = document.createElement('input');
         * element.style.width = "150px";
         * element.style.height = "50px";
         * 
         * let panel = new vizwide3d.Panel(view);
         * panel.SetContent(element);
         */
        this.SetContent = function (element) {
            if (element !== undefined) {
                scope.Element.Content.appendChild(element);
            }
        };

        /**
         * Panel Content 배경 색상 설정
         * @param {Object} color { r : 255, g : 255, b : 255, a : 255}
         * @example
         * panel.SetContentBackgroundColor({ r : 255, g : 255, b : 255, a : 255});
         */
        this.SetContentBackgroundColor = function (color) {
            scope.Element.Content.style.backgroundColor = "rgba(" + color.r + "," + color.g + "," + color.b + "," + 255 / color.a + ")";
        };

        /**
         * Panel Content 색상 설정
         * @param {Number} R Red(0~255)
         * @param {Number} G Green(0~255)
         * @param {Number} B Blue(0~255)
         * @param {Number} A Alpha(0~255)
         * @example
         * panel.SetContentBackgroundColorFormRGBA(255,255,255,255);
         */
        this.SetContentBackgroundColorFormRGBA = function (R, G, B, A) {
            if (R === undefined || G === undefined || B == undefined || A == undefined) {
                scope.Element.Content.style.backgroundColor = "rgba(" + defaultColor.r + "," + defaultColor.g + "," + defaultColor.b + "," + 255 / defaultColor.a + ")";
            }
            else {
                scope.Element.Content.style.backgroundColor = "rgba(" + R + "," + G + "," + B + "," + 255 / A + ")";
            }
        };

        
    }
};

export default Panel;
