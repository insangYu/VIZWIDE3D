//import $ from 'jquery';

class Toolbar {
    constructor(view, VIZCore) {
        let scope = this;

        this.ReviewType = VIZCore.Enum.REVIEW_TYPES.NONE;

        let useToolbar = true; //toolbar 메뉴 사용 여부
        this.Visible = true; //Toolbar 메뉴 보이기/숨기기 상태

        let useToolbarControl = true; //Toolbar Control 보이기/숨기기 버튼 사용

        create();
        function create() {
            scope.Visible = view.Configuration.Toolbar.Visible;

            if (view.DEBUG === true) {
                initTest();
            }
            initMenu();
            initProgressBar();
            initSplitProgressBar();
            initMessage();
            initWaitLoading();
            initNote();
            initMessageBoxWindow();
            //initProperty();
            //initConfig();
            //initToolbarControl();
        }

        let snapshot_play = null;

        function initTest() {
            let divTest = document.createElement('div');
            divTest.id = view.GetViewID() + "VIZCore_Test";
            divTest.className = "uicontainer_test";
            let uibox = document.createElement('div');
            uibox.id = view.GetViewID() + "uibox";
            uibox.className = "uibox";
            divTest.appendChild(uibox);

            let ui_test1 = document.createElement('div');
            ui_test1.id = view.GetViewID() + "ui_test1";
            ui_test1.className = "uialone_test";
            ui_test1.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAd0lEQVRYhe2X0QrAIAhFb2P//w3tS91TI1w2JIeD3Qu9aORBRayICDK1pUb/PcAMoAKQ4FNHgawmfKszizakl2B/8N+IO+ksee5e+mwGjuA45nsrk9BTAlOchAQgAAEIQAACEMAL0K/rWs0+XL+jAMLFz2kuAIAT9OIr3/HC//oAAAAASUVORK5CYII=\" width=\"24px\" >";
            //ui_test1.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAd0lEQVRYhe2X0QrAIAhFb2P//w3tS91TI1w2JIeD3Qu9aORBRayICDK1pUb/PcAMoAKQ4FNHgawmfKszizakl2B/8N+IO+ksee5e+mwGjuA45nsrk9BTAlOchAQgAAEIQAACEMAL0K/rWs0+XL+jAMLFz2kuAIAT9OIr3/HC//oAAAAASUVORK5CYII=\" width=\"24px\" >";
            uibox.appendChild(ui_test1);

            let ui_test2 = document.createElement('div');
            ui_test2.id = view.GetViewID() + "ui_test2";
            ui_test2.className = "uialone_test";
            ui_test2.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAd0lEQVRYhe2X0QrAIAhFb2P//w3tS91TI1w2JIeD3Qu9aORBRayICDK1pUb/PcAMoAKQ4FNHgawmfKszizakl2B/8N+IO+ksee5e+mwGjuA45nsrk9BTAlOchAQgAAEIQAACEMAL0K/rWs0+XL+jAMLFz2kuAIAT9OIr3/HC//oAAAAASUVORK5CYII=\" width=\"24px\" >";
            uibox.appendChild(ui_test2);

            let ui_test3 = document.createElement('div');
            ui_test3.id = view.GetViewID() + "ui_test3";
            ui_test3.className = "uialone_test";
            ui_test3.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAd0lEQVRYhe2X0QrAIAhFb2P//w3tS91TI1w2JIeD3Qu9aORBRayICDK1pUb/PcAMoAKQ4FNHgawmfKszizakl2B/8N+IO+ksee5e+mwGjuA45nsrk9BTAlOchAQgAAEIQAACEMAL0K/rWs0+XL+jAMLFz2kuAIAT9OIr3/HC//oAAAAASUVORK5CYII=\" width=\"24px\" >";
            uibox.appendChild(ui_test3);

            //$('#' + view.GetViewID() + 'VIZCore').append(divTest);
            view.Container.appendChild(divTest);

            let id = "";
            if ($('#' + view.GetViewID() + 'ui_test1').length > 0) {
                $("#" + view.GetViewID() + "ui_test1").click(function () {

                    view.Dual.Show(true);
                    //view.Configuration.Render.CoordinateAxis.Visible = true;
                    //view.Avatar.ShowAvatar = true;
                    //view.Control.SetMode(VIZCore.Enum.CONTROL_STATE.WALKTHROUGH); //Control 초기화


                    //view.RunTestCode();
                    //view.Animation.Daelim_InitAnimation();
                    //view.Animation.Daelim_StartAnimation();
                    // let nodeIDs = [367555];
                    // let bodies = view.Tree.GetBodies(nodeIDs);
                    // let bodyIDs = [];
                    // for (let i = 0; i < bodies.length; i++) {
                    //     bodyIDs.push(bodies[i].bodyId);
                    // }
                    // let color = new VIZCore.Color(0, 0, 255, 255);
                    // view.Data.SetObjectCustomColor(bodyIDs, color);



                    //Test
                    //if (view.Camera.perspectiveView) {
                    //    view.Camera.PerspectiveFocusCenter(view.Data.ObjectsBBox);
                    //}
                    //view.Review.AddSurfaceDistance();
                    // NodeID 기준으로 BodyID 조회
                    //let id_node = 2449;
                    //let ids = view.Tree.GetBodyId(id_node);
                    //if (ids.length !== 0) {
                    //    view.Camera.FocusObject(ids);
                    //}
                    //let ids = view.Tree.GetRootNode();
                    //view.Data.Show(ids[0].node_id, 0);
                    // TAG NO : 1224-PE31PB-L-CD001-25
                    // 속성 키, 값 이 일치하는 BodyID 목록 반환
                    //let ids = view.Property.GetBodyIDsByKeyValue("TAG NO", "1224-PE31PB-L-CD001-25");
                    //if (ids.length !== 0) {
                    //    view.Camera.FocusObject(ids);
                    //}
                    //for (let i = 0; i < 1000; i++) {
                    //    let customObj = view.Data.CustomObjectData();
                    //    let color = undefined;
                    //    if (i % 2 === 0)
                    //        color = new VIZCore.Color(44, 0, 0, 100);
                    //    else
                    //        color = new VIZCore.Color(255, 255, 0, 50);
                    //    let range = 50000;
                    //    let land1 = Math.random() * range;
                    //    let land2 = Math.random() * range;
                    //    let land3 = Math.random() * range;
                    //    let custom = view.CustomObject.CustomObject_Sphere3D(new VIZCore.Vector3(2897611.85 + (land1), 1173606.51 + (land2), 12025.97 + (land3)), 1000, color);
                    //    if (i % 4 === 0)
                    //        custom.tag[0].action.selection = true;
                    //    customObj.object.push(custom);
                    //    view.CustomObject.AddObject(customObj);
                    //    //view.CustomObject.SetPosAndDirection(customObj.uuid, new VIZCore.Vector3(0, 0, 50000), undefined, undefined);
                    //}
                    //let roots = view.Tree.GetRootNode();
                    //let child = view.Tree.GetChildNode(roots[0].node_id, false);
                    //let find = view.Tree.FindNodeByName(roots[0].name, false);
                    //console.log(find);
                    //view.Review.AddObjectMinDistance();
                    //view.Review.SetSketchMode(true);
                    //view.Control.SetSubType(VIZCore.Enum.SKETCH_TYPES.FREE);
                    //view.Control.SetSubType(VIZCore.Enum.SKETCH_TYPES.CIRCLE);
                    //view.Control.SetSubType(VIZCore.Enum.SKETCH_TYPES.LINE);
                    //view.Control.SetSubType(VIZCore.Enum.SKETCH_TYPES.RECT);
                    //view.Control.SetSubType(VIZCore.Enum.SKETCH_TYPES.TEXT);
                    //let item = view.SHWebSocket.PlayerSocket();
                    //item.name = "임시아이디";
                    //
                    //if (view.Avatar.GetObject()) {
                    //    let avatar = view.Avatar.GetObject();
                    //    item.avatarID = view.Avatar.AvatarUserType;  //Type
                    //    item.avatarUUID = avatar.uuid;
                    //}
                    //
                    //view.SHWebSocket.Connected(undefined, item);
                    //view.Renderer.SetGroundPlane(true);
                    //let mode = view.Control.GetMode();
                    //
                    //if (mode !== VIZCore.Enum.CONTROL_STATE.FLY) {
                    //    // 원근 뷰 교체 후 워크쓰루 모드 설정
                    //    if (!view.Camera.perspectiveView) {
                    //        view.Camera.perspectiveView = true;
                    //    }
                    //    view.Control.SetMode(VIZCore.Enum.CONTROL_STATE.FLY);
                    //}
                    //view.Renderer.SetWireframeMode(true);
                    //view.Animation.ShowAnimationReview = !view.Animation.ShowAnimationReview;
                    //view.Animation.hyundai_POC();
                    //let ids = view.Property.GetNodeIDsByKeyValue("23) SB_TAG", "LK021");
                    //let bbox = view.Property.GetBBoxByID(ids[0]);
                    //let offset = new VIZCore.Vector3(0, 0, 1800);
                    //bbox.center.z += offset.z;
                    //view.Camera.pivot = bbox.center;
                    //view.Camera.FocusObject(ids, offset);
                    //view.Camera.cameraMatrix.rotate(0.0, -3.141592654, 0.0);
                    //view.Camera.cameraMatrix.rotate(3.141592654 / 4.0, 0.0, 0.0);
                    //view.Property.FindObjectsNAddPath("23) SB_TAG", "LK021", new VIZCore.Vector3(-257656.20, -15434.97, 300.0));
                    //view.Property.FindObjectsNAddPath("23) SB_TAG", "LK009", new VIZCore.Vector3(-255796, -15434.97, 300.0));
                    //view.Property.FindObjectsNAddPath("23) SB_TAG", "LK041", new VIZCore.Vector3(-255796, -15434.97, 300.0));
                    // Leak 검색 후 종료지점까지 최단거리 표시
                    //view.Drawing.FindObjectsNAddPath("23) SB_TAG", "LK038", new VIZCore.Vector3(-255796, -15434.97, 300.0));
                    // 패스 삭제
                    //view.Drawing.Clear();
                    //view.Data.GetFileMap();
                    //view.Data.SetObjectColor(11, new VIZCore.Color(0, 255, 255, 255));
                    //view.Animation.Hyundai_init();
                    //view.Model.Add_Header("./VIZCore/Model/VIZW(Wide3D)/20113031344_EB Sample Model_Pipe/VIZW/20113031344_EB Sample Model_Pipe_wh.vizw");
                    //view.Data.SetSelectedObjectsColor(new VIZCore.Color(0, 255, 255, 128));
                });
            }
            if ($('#' + view.GetViewID() + 'ui_test2').length > 0) {
                $("#" + view.GetViewID() + "ui_test2").click(function () {
                    let map_name = new Map();
                    let map_civil = new Map();
                    let arrRoot = view.Tree.GetRootNode();
                    let arrCivil = [];
                    let arr = [];
                    for (let index = 0; index < arrRoot.length; index++) {
                        const element = arrRoot[index];
                        let arrChild = view.Tree.GetChildNode(element.node_id, false);
                        for (let j = 0; j < arrChild.length; j++) {
                            const child = arrChild[j];
                            if(child.name.includes("CIVIL"))
                            {
                                let arrName = child.name.split('_');
                            
                                if(map_name.has(arrName[0])){
                                    let items = map_name.get(arrName[0]);
                                    items.push(child);
                                }
                                else{
                                    let items = [];
                                    items.push(child);
                                    map_civil.set(arrName[0], items);
                                }
                            }
                            else if(
                                child.name.includes("PIPE") 
                                ||child.name.includes("STR")
                            )
                            {
                            let arrName = child.name.split('_');
                            
                            if(map_name.has(arrName[0])){
                                let items = map_name.get(arrName[0]);
                                items.push(child);
                            }
                            else{
                                let items = [];
                                items.push(child);
                                map_name.set(arrName[0], items);
                            }
                        }
                        }
                    }

                    console.log("Display Node", map_name);

                    let display = function(id, time, color_start, color_end){
                        //Daelim_AddAnimation = function(ids, time, color_start, color_end){
                        let str = "scope.Animation.Daelim_AddAnimation(" + id + "," + time + ",new VIZCore.Color(" + color_start.r +","+ color_start.g+","+color_start.b+","+color_start.a+")" +  ",new VIZCore.Color(" + color_end.r +","+ color_end.g+","+color_end.b+","+color_end.a+"));"
                        console.log(str);
                    };
                    //scope.Animation.Add(groupid, 25934, 3, new VIZCore.Vector3(0, 0, 0), new VIZCore.Vector3(0, 0, 0),true,  new VIZCore.Color(255,0,0,255));
                    let time = 0;
                    let bind = function(value, key, map){
                        for (let index = 0; index < value.length; index++) {
                            const element = value[index];
                            display(element.node_id, time, new VIZCore.Color(255,0,0,255), new VIZCore.Color(0,255,0,255));
                            time++;
                        }
                    };
                    map_civil.forEach(bind);
                    map_name.forEach(bind);

                    // let nodeIDs = [367555];
                    // let bodies = view.Tree.GetBodies(nodeIDs);
                    // let bodyIDs = [];
                    // for (let i = 0; i < bodies.length; i++) {
                    //     bodyIDs.push(bodies[i].bodyId);
                    // }
                    // let color = new VIZCore.Color(0, 0, 255, 100);
                    // view.Data.SetObjectCustomColor(bodyIDs, color);



                    //let ids = view.Data.GetSelection();
                    //view.Camera.FocusObject(ids);
                    //view.Camera.FocusBBox(bbox);
                    //view.Review.SetSketchMode(false);
                    //view.Review.AddNormalDistance();
                    //let item = view.SHWebSocket.PlayerSocket();
                    //item.name = "임시아이디_ssjo";
                    //
                    //if (view.Avatar.GetObject()) {
                    //    let avatar = view.Avatar.GetObject();
                    //    item.avatarID = view.Avatar.AvatarUserType;  //Type
                    //    item.avatarUUID = avatar.uuid;
                    //}
                    //
                    //view.SHWebSocket.Connected(undefined, item);
                    //view.Renderer.SetGroundPlane(false);
                    //view.Dual.Show(true);
                    //view.Model.Clear();
                    //view.Animation.Hyundai_Play();
                    //let nodes = view.Property.GetNodeIDsByKeyValue("23) SB_TAG", "LK038");
                    //if (nodes.length === 0)
                    //    return;
                    //let bbox = new VIZCore.BBox();
                    //let bFind = false;
                    //// 중심점 계산
                    //for (let i = 0; i < nodes.length; i++) {
                    //    if (!bFind) {
                    //        let result = view.Property.GetBBoxInfoByID(nodes[i]);
                    //        if (result.result) {
                    //            bbox = result.bbox;
                    //            bFind = true;
                    //        }
                    //    }
                    //    else {
                    //        let result = view.Property.GetBBoxInfoByID(nodes[i]);
                    //        if (result.result) {
                    //            bbox.append(result.bbox);
                    //        }
                    //    }
                    //}
                    //view.Drawing.AddPath(new VIZCore.Vector3(-255796, -15434.97, 300.0), bbox.center);
                    //scope.ShowMessageBox("titleTest", "한글자", undefined, 1);
                });
            }
            if ($('#' + view.GetViewID() + 'ui_test3').length > 0) {
                $("#" + view.GetViewID() + "ui_test3").click(function () {
                    view.RunTestCode();
                    //view.Review.AddObjectMinDistance();
                    //view.Review.AddNormalDistance();
                    //view.Review.AddOrthoDistance();
                    //view.Review.AddHorizontalityDistance();
                    //view.SHWebSocket.SetChat("안녕하세요. 소프트힐스 조수성입니다. 텍스트 길이를 테스트 중입니다. 감사합니다. 특수기호 테스트");
                    //let txt = "안녕하세요. 소프트힐스 조수성입니다. 텍스트 길이를 테스트 중입니다. 감사합니다.";
                    //let txtNum = txt.length;
                    //view.SHWebSocket.SetChat(txt);
                    //view.SHWebSocket.Disconnected();
                    //view.Dual.Show(false);
                    //let pos = new VIZCore.Vector3(24.53, -1808.31, 1097.84);
                    //view.Drawing.AddCustom(pos, { progress: 30 });
                    //view.Drawing.AddCustom(pos, { battery: 60 });
                    //view.Camera.cameraMatrix.rotate(-3.141592654 / 4.0, 0.0, 0.0);
                    //let result = view.Property.GetPropertyValue(250412, "3) S5_UTILITY");
                    //let result = view.Property.GetInnerObjectsByProperty("23) SB_TAG", "LK021", "3) S5_UTILITY", "PA");
                    //let result = view.Property.GetInnerObjectsByProperty("23) SB_TAG", "LK021", "3) S5_UTILITY", "LS");
                    //let result = view.Property.GetInnerObjectsByProperty("23) SB_TAG", "LK016", "3) S5_UTILITY", "LS");
                    //let result = view.Property.GetInnerObjects("23) SB_TAG", "LK021");
                    //view.Tree.SelectMulti(result, true, false);
                    //view.Tree.ShowAll(false);
                    //let nodes = [569, 3876, 13668, 26488, 33155, 40198, 43468, 71087];
                    //for (let i = 0; i < nodes.length; i++) {
                    //    view.Tree.Show(nodes[i], true);
                    //}
                    //view.Tree.AfterProcess();
                    //view.Model.Clear();
                    // id에 해당하는 모델 Transform 적용 (id, move, rotate)
                    //view.Data.Transform(11, new VIZCore.Vector3(0, 0, 0), new VIZCore.Vector3(0, 90, 0));
                    //view.Data.Transform(19, new VIZCore.Vector3(0, 0, 100), new VIZCore.Vector3(0, 0, 30));
                    //let review = view.Data.ReviewItem();
                    //review.itemType = REVIEW_TYPES.RK_SURFACE_NOTE;
                    //view.Measure.UpdateReviewStyle(review);
                    ////view.Measure.UpdateReviewText(uiBase.currentReviewItem, textData);
                    //review.text.value.push("밸브 교착");
                    //review.text.position = new VIZCore.Vector3(-652011.5545150372, -8900724.030327125, 2445.1642108777814);
                    //review.drawitem.position[0] = new VIZCore.Vector3(-654007.9784429099, -8900300.594998302, 2351.555770848123);
                    ////등록
                    //view.Data.Reviews.push(review);
                    //view.Renderer.Render();
                    //let testOKcallback = function () {
                    //    scope.ReviewType = VIZCore.Enum.REVIEW_TYPES.RK_3D_NOTE;
                    //    //view.Review.Add3DNote();
                    //    initNoteWindow();
                    //    visibleNoteWindow(true);
                    //};
                    //scope.ShowMessageBox("titleTest", "한글자", testOKcallback, 0);
                });
            }

        }

        function initMenu() {

            let divToolbarCtrl = document.createElement('div');
            divToolbarCtrl.id = view.GetViewID() + "VIZCore_Toolbar_control";
            divToolbarCtrl.className = "control_uicontainer";

            view.Container.appendChild(divToolbarCtrl);

            //Header
            if (useToolbarControl) {
                let divToolbarHeader = document.createElement('div');
                divToolbarHeader.id = view.GetViewID() + "VIZCore_Toolbar_header";
                divToolbarHeader.className = "uicontainer_header";

                //view.Container.appendChild(divToolbarCtrl);
                divToolbarCtrl.appendChild(divToolbarHeader);

                let uibox_toolbarCtrl = document.createElement('div');
                uibox_toolbarCtrl.id = view.GetViewID() + "uibox_ctrl";
                uibox_toolbarCtrl.className = "uibox_ctrl";
                //uibox_toolbarCtrl.style.width = 250;
                divToolbarHeader.appendChild(uibox_toolbarCtrl);

                let ui_toolbarHide = document.createElement('div');
                ui_toolbarHide.id = view.GetViewID() + "ui_toolbarHide";
                ui_toolbarHide.className = "uitxt uibottom";
                ui_toolbarHide.style.padding = "0";
                ui_toolbarHide.innerHTML = "<img id=\"ui_toolbarHide_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbUlEQVRYR+2UT07CQBTGv9cCa7wBS21ccASO4BE4gWUSS+KqdmVCTYZ6ATkCR+AILEx1yRFcC+0zozQZakqnBcWYdjNp5s/7vW++bwgn/ujE9dEANAo0Cvw9BZwwYgYtbCTBsycWx3gnLkM5SGD7BB7EnrvT9DcF9MUKhDgR8Vgs64A4E9lnsqUqXNRU4RXoICCepWsOXm/FygTk/F72rDb5YBqWqVnqgYsHeUWwJBi9MhC9MAgrRipebsR8H3QpQLbZmTwOYbGvQAg8bbc4WArxpub7UnbXG/IZNFKFkVIQj69nJmoZA+yAEMvtf7Qd3c+RSZgWzs6rDJB1/L6xRgC+CgNRp5VOM0VMOi8E+OEY9mPPPdMB98YQTPM0SYSp+/OdHxzDlKwnE/fnCx81hrr7VQw7Nouiu87H0CQNxibUQLp50/1uDMPoTnf//4thlQwr6dX6Ovk/6CGqAlm21tiEZQfVnW8AGgUaBT4AwKvjIaTehw0AAAAASUVORK5CYII=\" width=\"16px\" >";

                uibox_toolbarCtrl.appendChild(ui_toolbarHide);


                if ($('#' + view.GetViewID() + 'ui_toolbarHide').length > 0) {

                    $('#' + view.GetViewID() + 'ui_toolbarHide').width(100);
                    $('#' + view.GetViewID() + 'ui_toolbarHide_img').width(16); //uitxt width 16변경

                    if (scope.Visible) {
                        //$("#" + view.GetViewID() + "ui_toolbarHide").addClass('clck');
                        $("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbUlEQVRYR+2UT07CQBTGv9cCa7wBS21ccASO4BE4gWUSS+KqdmVCTYZ6ATkCR+AILEx1yRFcC+0zozQZakqnBcWYdjNp5s/7vW++bwgn/ujE9dEANAo0Cvw9BZwwYgYtbCTBsycWx3gnLkM5SGD7BB7EnrvT9DcF9MUKhDgR8Vgs64A4E9lnsqUqXNRU4RXoICCepWsOXm/FygTk/F72rDb5YBqWqVnqgYsHeUWwJBi9MhC9MAgrRipebsR8H3QpQLbZmTwOYbGvQAg8bbc4WArxpub7UnbXG/IZNFKFkVIQj69nJmoZA+yAEMvtf7Qd3c+RSZgWzs6rDJB1/L6xRgC+CgNRp5VOM0VMOi8E+OEY9mPPPdMB98YQTPM0SYSp+/OdHxzDlKwnE/fnCx81hrr7VQw7Nouiu87H0CQNxibUQLp50/1uDMPoTnf//4thlQwr6dX6Ovk/6CGqAlm21tiEZQfVnW8AGgUaBT4AwKvjIaTehw0AAAAASUVORK5CYII=");
                    }
                    else {
                        //$("#" + view.GetViewID() + "ui_toolbarHide").removeClass('clck');
                        $("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZElEQVRYR+2UQU6DQBSG/wdt1/UGLJW46BE4gkfoCaSTSBNXyMqkmEzxAvYIPUKP0IVBlz2Ca1t4ZrQ1lJYykCiawBaG/5s/73uEhh9qOB8tQNtA28D/bGAgZf99Y4wAuNs9EvU66XQpxFvVvVK5ATuM7rLB28AvECYRj69nVSC0AezJ4xAG+2D0AezdWDWy3pDPoBEIK6QU6IKUAmSCLRDPeiaLoqrP76VldMkH01AXpBDgMpROSsYTGJ/B6ZqD11ux0qk3C8KghYkkePbE4tjZAwAVnMD0CeyAaZ4midANzgfYEzlgMqX6VxHIAYAdRlxGrdNC9pvMpQax555l35XOwLGwZjVUNhDLnf9NaGgReNrtcLCz4Uc1vHiQVwRD6tiQ15CRipcbMT81Myc1/LahKQ2VDcSJiMdiWXXy1fd/UUMn9ty91mtpWKcNdUbNSH6p/SqA1ique7u659oG2gbaBj4AvkjjIZUjHd4AAAAASUVORK5CYII=");
                    }

                    $('#' + view.GetViewID() + 'ui_toolbarHide').bind("contextmenu", function (e) {
                        e.preventDefault();
                    });
                    $("#" + view.GetViewID() + "ui_toolbarHide").click(function () {
                        //view.Data.ShowSelection(false);
                        //scope.Show(!scope.Visible);
                        scope.ShowAnimation(!scope.Visible);
                        if (scope.Visible) {
                            //$("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVRYhe2W/QmDMBDF70oHyQiO4AiO4AZ1BEfoBuIEruAI3aAjOMIrBycESWJjY/9o7wdByH28Z5RwZBg5AHDY4fQDRUIkFYtxOcOkGTADOVyPFB35238DAC2ACcASuI4WjbXFXxZAA+CpQiLSAagBDLpq3Zs0R3KbUuKDNpWn28R6WZs959d8Kt5ro+Cxhgx4sVZrg/F3xCtt0O0YjAroZxGqWE7qHrgR0czM9xzjPlo7a69sA3Ls41Fxj1F7ZRsQHgUMlOjxRWLzzuogNRXl5KzwdiN2zzMzl84RbB4wA8afQ0QvMjtEploo/DAAAAAASUVORK5CYII=");
                            //$("#" + view.GetViewID() + "ui_toolbarHide").addClass('clck');
                        }
                        else {
                            //$("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVRYhe2WwU0DMRBFH4gCKIGzT+kAOoAOyFZg7cFnwtkH4gpCOggdkA44+UrogA5AI7ySFbTWzm4ikOJ/XI+/39jjWVN18jrTbIDx4Qp4L8VEZ1WeahkfvgqAvWN9Oj8qbQWoAAN0MWbSmGr/t9I2ojlwC9wAl3vDn8Ar8BKdfR7qOQjA+HAHPAHSCTfAFngD7lPIGpgB14DE7oA2OruZDGB8WAGSuWT1GJ3dZWMLftrvIvsmkA/dnOhsU/IvFmFaQIyaoduaABvjg+zSyvjwkQPuq/caGh9mKZNWc6YZiMxpxSN56QAAK0UVnV1qF88glqkw7RiAeSquqVonLzUAqdKn6hAex9Ova9jXZruXTulVpInppP4Z5X1gSsxogEOrAvw5QNWJC/gGzxpfJC2uLCoAAAAASUVORK5CYII=");
                            //$("#" + view.GetViewID() + "ui_toolbarHide").removeClass('clck');
                        }
                    });
                }


                if ($('#' + view.GetViewID() + 'VIZCore_Toolbar_control').length > 0) {
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar_control').css('transition', 'bottom 300ms');

                    if (!useToolbarControl)
                        $('#' + view.GetViewID() + 'VIZCore_Toolbar_control').hide();
                }
            }

            let divToolbar = document.createElement('div');
            divToolbar.id = view.GetViewID() + "VIZCore_Toolbar";
            divToolbar.className = "uicontainer";

            //view.Container.appendChild(divToolbar);
            divToolbarCtrl.appendChild(divToolbar);

            let uiBoxNum = 1;

            // Hyundai
            if (view.DemoType === 2) {
                let uibox_custom = document.createElement('div');
                uibox_custom.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
                uibox_custom.className = "uibox";
                divToolbar.appendChild(uibox_custom);

                let ui_miniview = document.createElement('div');
                ui_miniview.id = view.GetViewID() + "ui_miniview";
                ui_miniview.className = "uitxt uialone_line";
                ui_miniview.innerHTML = "<img id=\"ui_miniview_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVRYhe1Wy3HCMBB9zqQAl0CuusTuwFRAUgGkAsHBZ+KzDkQVJKkAUkHoALj4GkpwB8mIeWaE8BfHk0PYGQaQ1rtv3/6Mq1zlr8XL/QulvwHsAawAvKex3DbFJpQOAIwBPAAYtLHjAnhpaqTC6bSNnRMAaSy9GuMfAEZVxhvaOerfFtHCS/OZOUambeitseOdKDMFldKHzk2d077lCqAPAMM2yoVdcIkIpSes8kgobVtYs2PeegEglDb9vQQQ8Mi0XcbfvgFEUBLAYxrL/a8BoPMNHZlIEwLxqWKAGDoWPN8IpUMLYGcGlnRm6N0B+CzRsxlZEuhBLi5C5jxg5DtGWSTGWR51xmeODHTpgjG/kxLnZlzfpbF8BjBh9DPn2U4piFhwgXN+mP1pLA0zeZ3MeefzPsqVL2JAKG0Xme9cG0bmTBEcdnyb/osBVMiKNZEDjbj9SuUEgFD6Syi94OoslTSWdlXbERnqszSWQ65ttzbOGLNrILT3tVC6bu+vmct87CVmyDDni5LI91bnHMQrUGryujXg29GrxUDIap8X2WQHjAj6KR/NhQAagkk4ePJ0FRWk7fyeALdpLMNKBpqKM4ozOvKdUWwAS0Zu/of2PugEAM2WkX1+tow6A7CAHNexc1W5jv+5APgBmtzgwvuClowAAAAASUVORK5CYII=\" width=\"24px\" >";
                uibox_custom.appendChild(ui_miniview);

                //let ui_player = document.createElement('div');
                //ui_player.id = view.GetViewID() + "ui_player";
                //ui_player.className = "uitxt uiend";
                //ui_player.innerHTML = "<img id=\"ui_player_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAy0lEQVRYhWMYBaNgxANGWABodU/8T8/AuFaaD7abCYvcBpAkVMEBGonBATYHXERiH6SRGF4H6DNAokQAxqaBGBwMeBqAA3o6ANkuFgoM2MDAwFB4rTT/ASWOwZYGiAUBDAwM97W6JzZA45fuDoCBegYGhvNa3RMTBsoBIKDAwMAwX6t74n5SQ4NaDiAbkJUIsQBQQmy8Vpq/gFSN1HBAIwMDw4RrpfkfyNFMiQOokg3JcgBGKUYtB9C7OAaB0ep4tDoeBaNghAMGBgYArmmC/D6ZC2wAAAAASUVORK5CYII=\" width=\"32px\" >";
                //uibox_custom.appendChild(ui_player);
                // MiniView
                if ($('#' + view.GetViewID() + 'ui_miniview').length > 0) {
                    $('#' + view.GetViewID() + 'ui_miniview').attr('data-tooltip-text', 'MiniMap');

                    $('#' + view.GetViewID() + 'ui_miniview').bind("contextmenu", function (e) {
                        e.preventDefault();
                    });
                    $("#" + view.GetViewID() + "ui_miniview").click(function () {
                        view.MiniView.Show(!view.MiniView.Visible);
                        if (view.MiniView.Visible) {
                            $("#" + view.GetViewID() + "ui_miniview_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABi0lEQVRYhe1W0XGDMAyVOgHdgBHSDegGGYENSiYonYARMgLdIN2AEZIN0g1ez1eJCgPGQLjrB+8uF2Jb7z1Lsgnt2PFvgF9cAVQADnN8ufUSd13MI4HRJAHRWTwdAxHk2RR5JE/fjA1ck95YnujArdc8TYlujd3AFgZeF0WtbUIAOYAL+nBj+STPUgMAUgCNkW1E9DIwnvo8bMmZmX0B34BdI4QNESVE9EVEH0R0kN8O3/KpZMw9v7gYZn5enQGzwzOAYiD9iruXiSIqvaE1UnNIqkPipZTpbozkQfJIA9pw2YhwbWpeqrCafoSBNp2esBvLzLrUzBVaNp1fdA8AsE2WeNOuEd9Nmiszp43Y4tEX0aecBjXqMnEMBXQMxP55YGbdhb+jk5tjZncb3rzd00jGWvHJ9/5IE2pjlfRX83qkMY+jTRhpBvJdG2E9Xqnp9iEU1nTQQKSZxLtq7xPiZz0lnXJGOxk2Z69iV9+TPNtT4nrhjYgyvYqZ+bZGt2di7stoE8x5He9oQUQ/ttzwRMiHA5gAAAAASUVORK5CYII=");
                            $("#" + view.GetViewID() + "ui_miniview").addClass('clck');
                        }
                        else {
                            $("#" + view.GetViewID() + "ui_miniview_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVRYhe1Wy3HCMBB9zqQAl0CuusTuwFRAUgGkAsHBZ+KzDkQVJKkAUkHoALj4GkpwB8mIeWaE8BfHk0PYGQaQ1rtv3/6Mq1zlr8XL/QulvwHsAawAvKex3DbFJpQOAIwBPAAYtLHjAnhpaqTC6bSNnRMAaSy9GuMfAEZVxhvaOerfFtHCS/OZOUambeitseOdKDMFldKHzk2d077lCqAPAMM2yoVdcIkIpSes8kgobVtYs2PeegEglDb9vQQQ8Mi0XcbfvgFEUBLAYxrL/a8BoPMNHZlIEwLxqWKAGDoWPN8IpUMLYGcGlnRm6N0B+CzRsxlZEuhBLi5C5jxg5DtGWSTGWR51xmeODHTpgjG/kxLnZlzfpbF8BjBh9DPn2U4piFhwgXN+mP1pLA0zeZ3MeefzPsqVL2JAKG0Xme9cG0bmTBEcdnyb/osBVMiKNZEDjbj9SuUEgFD6Syi94OoslTSWdlXbERnqszSWQ65ttzbOGLNrILT3tVC6bu+vmct87CVmyDDni5LI91bnHMQrUGryujXg29GrxUDIap8X2WQHjAj6KR/NhQAagkk4ePJ0FRWk7fyeALdpLMNKBpqKM4ozOvKdUWwAS0Zu/of2PugEAM2WkX1+tow6A7CAHNexc1W5jv+5APgBmtzgwvuClowAAAAASUVORK5CYII=");
                            $("#" + view.GetViewID() + "ui_miniview").removeClass('clck');
                        }
                    });
                }
                // Player
                if ($('#' + view.GetViewID() + 'ui_player').length > 0) {
                    $('#' + view.GetViewID() + 'ui_player').attr('data-tooltip-text', 'Player');

                    $('#' + view.GetViewID() + 'ui_player').bind("contextmenu", function (e) {
                        e.preventDefault();
                    });
                    $("#" + view.GetViewID() + "ui_player").click(function () {
                        view.Player.Show(!view.Player.Visible);
                        if (view.Player.Visible) {
                            $("#" + view.GetViewID() + "ui_player_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAqUlEQVRYhe2V0Q3CMAxEbcQAHYENWIlRuhHdoGUEJmCUqwpxmooIRYmcCMXvy3Ik++RzEjKM7mEZAADUHAYzv3ufImcTO4hoUcp5YgKeQfxQyv0UcKWPJYPECrndCgla7YCnpoCwV8yCpAIA7gAuKqoSBQij87esV4GAjReAW0sBwpwyjeIdUOGfLWi2hNnXMOx1zinw9YoVcBBQ+znesO/YvmPD6BwiWgHmkRAO0iIfJwAAAABJRU5ErkJggg==");
                            $("#" + view.GetViewID() + "ui_player").addClass('clck');
                        }
                        else {
                            $("#" + view.GetViewID() + "ui_player_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAy0lEQVRYhWMYBaNgxANGWABodU/8T8/AuFaaD7abCYvcBpAkVMEBGonBATYHXERiH6SRGF4H6DNAokQAxqaBGBwMeBqAA3o6ANkuFgoM2MDAwFB4rTT/ASWOwZYGiAUBDAwM97W6JzZA45fuDoCBegYGhvNa3RMTBsoBIKDAwMAwX6t74n5SQ4NaDiAbkJUIsQBQQmy8Vpq/gFSN1HBAIwMDw4RrpfkfyNFMiQOokg3JcgBGKUYtB9C7OAaB0ep4tDoeBaNghAMGBgYArmmC/D6ZC2wAAAAASUVORK5CYII=");
                            $("#" + view.GetViewID() + "ui_player").removeClass('clck');
                        }
                    });
                }
            }
            if (view.DemoType !== 2) {
                let uibox_popup = document.createElement('div');
                uibox_popup.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
                uibox_popup.className = "uibox";
                divToolbar.appendChild(uibox_popup);

                

                let ui_tree_visible = document.createElement('div');
                ui_tree_visible.id = view.GetViewID() + "ui_tree_visible";
                ui_tree_visible.className = "uitxt uistart";
                //ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVRYhe2X0Q2CMBCGf4zvOgojuIEjuAIbyAiOUDbASXQUmOBMDcUD2sKF0vrAn1xo0ubuS689rhkRIaUOSaMDOM7MFwDOAn81gHcoAAXgJnHWKQgAD/70OM0BXKWEA+lDODJFPynLvLGciBoaqvSst1qI4Ppbd2MxAL8FxSjnekwOewE4AWgBXKR55+IAktNutCr4V2w7Sooj5UpBLA2u9lwhGitbCTmp+8lL8Q6wA/wVQJMCgNeBR/e1leT7VgBLe0KzKFQh6v1sdQaU4y860VY74HPa8jTHvgWmf+gVE8DavMQCcHZOMQC8bZu0H5C+42Z7xqU7UAkDLwqutT9O0wIA+ADIm4JYaR7kEwAAAABJRU5ErkJggg==\" width=\"24px\" >";
                ui_tree_visible.innerHTML = "<img id=\""+ view.GetViewID() + "ui_tree_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVRYhe2WwU0DMRBFH4gCKIGzT+kAOoAOyFZg7cFnwtkH4gpCOggdkA44+UrogA5AI7ySFbTWzm4ikOJ/XI+/39jjWVN18jrTbIDx4Qp4L8VEZ1WeahkfvgqAvWN9Oj8qbQWoAAN0MWbSmGr/t9I2ojlwC9wAl3vDn8Ar8BKdfR7qOQjA+HAHPAHSCTfAFngD7lPIGpgB14DE7oA2OruZDGB8WAGSuWT1GJ3dZWMLftrvIvsmkA/dnOhsU/IvFmFaQIyaoduaABvjg+zSyvjwkQPuq/caGh9mKZNWc6YZiMxpxSN56QAAK0UVnV1qF88glqkw7RiAeSquqVonLzUAqdKn6hAex9Ova9jXZruXTulVpInppP4Z5X1gSsxogEOrAvw5QNWJC/gGzxpfJC2uLCoAAAAASUVORK5CYII=\" width=\"24px\" >";
                uibox_popup.appendChild(ui_tree_visible);

                let ui_property_visible = document.createElement('div');
                ui_property_visible.id = view.GetViewID() + "ui_property_visible";
                ui_property_visible.className = "uitxt uiend";
                //ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVRYhe2X0Q2CMBCGf4zvOgojuIEjuAIbyAiOUDbASXQUmOBMDcUD2sKF0vrAn1xo0ubuS689rhkRIaUOSaMDOM7MFwDOAn81gHcoAAXgJnHWKQgAD/70OM0BXKWEA+lDODJFPynLvLGciBoaqvSst1qI4Ppbd2MxAL8FxSjnekwOewE4AWgBXKR55+IAktNutCr4V2w7Sooj5UpBLA2u9lwhGitbCTmp+8lL8Q6wA/wVQJMCgNeBR/e1leT7VgBLe0KzKFQh6v1sdQaU4y860VY74HPa8jTHvgWmf+gVE8DavMQCcHZOMQC8bZu0H5C+42Z7xqU7UAkDLwqutT9O0wIA+ADIm4JYaR7kEwAAAABJRU5ErkJggg==\" width=\"24px\" >";
                ui_property_visible.innerHTML = "<img id=\""+ view.GetViewID() + "ui_property_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABOElEQVRYhe2WzRHCIBCFn44FWIJnTrGDlKAVqBVw4qyeOVFBtAM70BI8cdUS0kGcnSGZBDFEEv/GvBkOIWH5eJBd0OvvNXAZwKSaAVgDiDoy6AxgqwU/2C/uAJhUGzM5fbynwVrwa8isTKoJAGoLAEsAOy346iEAkyoGcASw0oLvQiatgSGABMC87IQNQJOnWvC5Jxit6pI/a8GdW+kYRwCRFnya9w2tb2Jje61Ct8TErpwrG4CUBgZvojtwF8DL5HLurQAu9QAfBxiFDmz67/v0mw60yIQTu8/lwNgXqEUm9AKcTOV6lRamNBeyt2BL1ZAql68aPnsITTWkVil033UfKA0MuREVdwj7kNbdiDoR2cukyozN+SKyJrE7yQNm5WRtUoZ4G0AbiE4zYRniIwAWRK9efgG4AW1FdlsYEZgqAAAAAElFTkSuQmCC\" width=\"24px\" >";
                uibox_popup.appendChild(ui_property_visible);



                let uibox_view = document.createElement('div');
                uibox_view.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
                uibox_view.className = "uibox";
                divToolbar.appendChild(uibox_view);
                //if (view.DemoType !== 0) {
                //}
                let ui_hide = document.createElement('div');
                ui_hide.id = view.GetViewID() + "ui_hide";
                ui_hide.className = "uitxt uistart";
                //ui_hide.innerHTML = "<img id=\"ui_hide_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABCbAAAQmwF0iZxLAAABbElEQVRIibVV7U3DUAw8I/7TEboBGSFs0BHSDTICG5QN0g06Qtkg2YARyAZGJ2zhvHy9BLAUtXmvvrN9tov/NiG+qhYAThlcvYi8+YuqlgA6EekXvVT1VfPsM/g05lGuhuUEudUK4E2uQzbBZvAtBLvAUwIKrqp3E/734BMER4ppTzEFbkHUuwgCgJPc0si3aPYwdSgiHYAXe+V8XEXknB1xsMe5C5KoKknKOFx/RoCfTLq94Jgr0ZKp6gHAM76/3+1pfKKDfvUoA4q3gv8EoAJwSDKjTpWq8oydx930HoHrzF1Ea9P9w6zs3C1ncQ4AFocs3LfpDOWAX+bALfLBnCQzdFwDP5nzbQbcy3JJ7grPaLFNTUyYaAMAACRlhGcRuU749sF/MQsvQYVxCUZiJpmt65A4uJiTItqibGNAWWYkBHUb/U0SMPwmH9ycPfKPQMLScauyy/ycn3ntmRAwMm9DloGEkYzrYhw1gC/I+YjzLz7aKQAAAABJRU5ErkJggg==\" width=\"24px\" >";
                ui_hide.innerHTML = "<img id=\""+ view.GetViewID() + "ui_hide_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAByUlEQVRYhe2WvXECMRCFHx7npgScKqIEU4FxBT4qEBcoNsQKQBVwJeAKcAcmUnyuwHRgz3pWg0aW7kdc4jEvuztpv6fVanW46t9rFEuA0OYrNzFWyZHQZgpAAjBWyWPT+NumQDkGGH4AMAbwAaDRwE0OpCP8BGDfNmcwAxH4rC39pOQWeEFb9zIXTmrLAMELCs6QQeFdDBgOOo6ZuBTeaoCDzWImhoC3GmgwUQwB72QgYWIXwoU2k5wG1vkYBiYQrtwqWfeF9zIQmFhfknZfjX2gwURnMNfLLtXaexsIglMdLAE8A5jgfJGRwVfepg2ARSrGELchQSoGOj1yAyODC6tklZqcysC9W1FCtCrqA1uuhxc+lk77LnBS7ytXaLPj1f0EF9ps+LkEUHP7nvtwoc0nmbJK/tqKXqfAg8+8lVENrPl5EsJZTzSPzeYbYHhllXwL3h9dtcfSzuMrNnuRgS2v5CF4L3240GYutFm5jzy+4Pn5BqySJa/E3Qfggpv7cDZzh3MfOHDmyjBm7n+fq4V9pOBWDHenY8nwaC/IMoD4aZjy0YPXB0hlTh9ogxc+nF+/e0Nq/pnZWiVPiTD5ok7p1cBVf1gAvgHeGfOuPi6xAAAAAABJRU5ErkJggg==\" width=\"32px\" >";
                uibox_view.appendChild(ui_hide);

                let ui_show_all = document.createElement('div');
                ui_show_all.id = view.GetViewID() + "ui_show_all";
                ui_show_all.className = "uitxt uiend";
                //ui_show_all.innerHTML = "<img id=\"ui_show_all_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABCbAAAQmwF0iZxLAAABc0lEQVRIibVUAXHDMAyUcgUQCIVgBguDFUIYbGMQBh2DdgjSIkgZtAw2BjUD7XQn3f5cO23STHe52LL9L78k038bI76IdDY8MfMp498z8w/410TU6piZu9FYRWQjf9Yna25N4m98oYRbwfgVxpullEOCNLpFSCoDC0SkekYi+rC1l8UIQBJN7CHxLULg+h+tSi56I6uS5wgMJNj8TUQGIqpt/vQtVglItL8TaB4+YT2UKjIp4cjMF1/orZSvsHmH9S1laworg2NVcIMDRHAsRDbZeOoBEantecDG1ML4wudllonIu0ppMpxVCvvcN8yuPMjLOfMm1fogei6tcWeB72weLFoH7MB/nUQiIlsEN9+3gWyBqM2QjMsFT3gPvgYBgXCAeXA5qxwwmDdcvLMvZxHOj96iL0Rckqi2QpCH8pAcwGTmkryGve1d8AKJ3ugmeQoI/fA4eALiFeVEWvvqU8nU9D+tBzIkKoP2hYN6B99GTUS/Hoc0F7yftQ8AAAAASUVORK5CYII=\" width=\"24px\" >";
                ui_show_all.innerHTML = "<img id=\""+ view.GetViewID() + "ui_show_all_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABqElEQVRYhe1WwXHCMBDcZFJASiBfvygBKjAdxFQgeOjtydsP7AosKkioAErgpTcl0AGZy6wyQhFKICY84p3xyKe7uVvfnU5Gjx63xt2p+FnVTAC8UpxbrepAf5DVavXFR0oX4j6hy73352slKkogq5pHAAWAPYAtgGFWNcM/IwBgwvUNwJLvV8nCKQIu2IokfFLXJZBVzQDAiKKUQOSdrGzMTvEQceYHWQe63MtIJ4iVQHE1AF74uCM4YYN2hqMMsNMl5Xur1TTQSVmGzJDx9o+yZLUa/0TnEJbAfX0szUsSyH0CXr/EkNL1+MC3szoFNuSMc2Pgme5YstpqtU/5uJhAVjUyqhcUDYeWQ85RDl5kJu4lfRmlgrcAWgZ+4vbae8B90be074YAncnXTa1WcwAlZXkfcxW5pF6Oc5EicVZwues5E9zegeXw7Wbun4DyiHaL0Oe5GZBAxmq1Cfa3KZn2hg37KwI10xkOmFA++negfeGN9E+cfQqCHjBMa8E7Y0MyJTM1Z3laytPQ30XH0CNRM3AZpDfcjwa/mAA6nAM3n4Q9/jkAvAOK2qHJQFdZjgAAAABJRU5ErkJggg==\" width=\"24px\" >";
                uibox_view.appendChild(ui_show_all);
            }

            let uibox = document.createElement('div');
            uibox.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
            uibox.className = "uibox";
            divToolbar.appendChild(uibox);

            let ui_camera_fitall = document.createElement('div');
            ui_camera_fitall.id = view.GetViewID() + "ui_camera_fitall";
            ui_camera_fitall.className = "uitxt uistart";
            //ui_camera_fitall.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA9UlEQVRYhe1XgQ2DIBA8GwdgJDboCh3BkXCDjtBRHKEbXKN5UkJAQaNfYy/5hPj4fzzHow1JaOKmmv3yBDwBB4BK5kYRqqqwDcbNwbmnhZ/2FNhIO06e1YNfYMEMyY7kwDwGmWMK4k0oIWBJukRKnyxHysm7mwnEeGYCW/HFmI3brti1O4C3jF+BJh7iq0NFBXLbkCt/UdwaAktCjAW4C4F4zz1SmiiKG7biXCec86/14fSdUIVAB8AUzDMytwwVIgyPmE0ILdcxd23FqXGK6CYC3tQuo5KqLK12Ux/YC7/RB8LbUOXjdKxAr5FY0P//DS9OAMAHOyeKM88P4B8AAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_camera_fitall.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABkUlEQVRYhe1WzW3CMBh9VB2AblCuPsEGZQOYoGQCi4PPDOAD8gRhg7IBbBB68bWMwAatPvVZMo5JAkj00DwpUvLy2d/7fvwl6NHj32MQEqCs+35kMrzRgzPikQJiX0+PcnoJzxl1rwC+Yq6Wrl+7BYA1H5fe6E3G5iyruX1qGfBGHxOqSDZ9U9ZVAEoAG16lcPKuaW0ObSUoQmTKuqGyTpzuAJwATLzREvlS7sntxEZsGcymTUStBDnnhJRlmOHF0QHAlGURkTMAL0GEsg7kuwnI1YrOBStl3dEbvY9fMv2rxDbsF0rVTUADRoxEUr2V5qPpmlGLqGnaxE24SgAbVFI9o9OKr6T+c2/0ltnovOe1GQhCxNFWWffB5/kt+9wsIMLnneuvm4TheN1r0ypAJhiPVAypc5Xh43UL9sUp5S99a5oyUCbORuxy4eUUjCMHY+F4Qva0jUVlZ0CbgDMR3uiTN7rgMRsy0ndeFbmp2IhtF+eCLk1YxkOEA2iSfIxq0zFa2w39/wD+4LesR48eAPADgjStVhFCYgYAAAAASUVORK5CYII=\" width=\"32px\" >";
            uibox.appendChild(ui_camera_fitall);



            let ui_rendermode = document.createElement('div');
            ui_rendermode.id = view.GetViewID() + "ui_rendermode";
            ui_rendermode.className = "uitxt uicenter_line ddinui";
            //ui_rendermode.innerHTML = "<img id=\"ui_rendermode_text_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACCElEQVRYhe1Xy4rqQBA9iqiIEh8gKKJx40436p+49l7wR+4nzCfMXfsJrsStbtSFiGAGRFc+gg98gH2pJvE2mfQQRwYHJgeaSleaqpPq6lS1hzGGZ8L7VO8AfA7WRAH8NqQqjJxl3RsATRgbAK+GlIO2QDJUxtgLY2zDPo+NYUOV+bHLAfq6PwB+icrFYoHT6YTlcnmbi0ilUnyWSCQQCARucwF/DbuaqLQjQCFT6OF8PmMwGGA8HmO73TrYrf+IRCIoFAooFovw+/2mXje28kMCXNHr9bhzIvEIyDmRKJfLN5+iOekpIAKPOocRRbIlgzQCtNdm+B+BuQ2UG3YRkBIwsdvt0O12oWma44hQ2FVVRaVSQTgctr52RkDXdSiK8s44EaKEFE+EmfmUeDYO0e/3USqV7iPQ6XQQDAaRyWTsjpQjtFotNJtNTKdT/mxH4MM/4Wq1wmw2w36/RzQaxfF45NLr9SKZTPJQX69XHhHKlfV6jeFwyNe12214PB7EYjHE43GpDye/Yo75fI7D4cAdkbQOIinqnOLpxcgl4BJwCbgEXAJSArlcDj6f41IhBZXoer0ufW/ngRpHJZvNIp1OYzKZYDQa3VVgCFTGa7UaGo2G2CPo1nV3teVEgqri5XLhpKjsUmNCklov0ufzeYRCIVSrVatd27b8W15MrPjSq9kPvx0D+AducOedPh2ShAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_rendermode.innerHTML = "<img id=\""+ view.GetViewID() + "ui_rendermode_text_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACMklEQVRYhe2XTWsTURSGn2QSMw35rrViLU3RhWRVcCMIWl0I7vwJ/oOAkI0b61KyMf+gf0B0KQhaEUQQRbCGLmxMMULb0DRNYyftfCDnkkgNneZL7WZeGC53Zjjvc+89Z+4dPJ20fP34Z/KFu0AamGm3CWCu67VPQB0oA2vSFnPZxV6xXQEy+YKY3AEeiGk6lUQPBDgbjajn0j+scm1b9dZ3m7Qsq9MXmIfAs2IuW+8bIJMvLABZPRBIXDozwfyFWRJjeq/B/KG60WJp9Rsrm1UBEvNCMZdd6AmQyRfmgVdiemVmWo16FMlsvFv7rmCAG8VcdulwOL9bbAEY1VwkMSSWm1wBZAr/lo6L5TrEx2/eqkQT+nQyMRRKebuupr6ToAMB3L95nSefv7D4/qMCEYhO5ksldC+PrLVUAO2KEHNpY6EQl89P8aHyYzAAyf57166yvL7By68llc3tRPqtTmV0T/EpTcPv8zEdjzMZjRA/poJ6ZtnF0+NMxWMYpoVhmmqkq1s1DiybSmMHy3aYTSXZt2xlLO8YloVp2+jB3kk8VJqfi0UVUEwPKTMFJsamNXAs1yr4X/IAPAAPwAPwAFwBni4X1Td+VNmOQ2mr5hpF675RffG8PHHrtm9lszr3ulTWN3abTMYiBP0aluP0fcluuGO0qDQa1PYMOZQ+OuqY3v+xPJkgqGmkwmOYtsN4OMy+baltWdpqcw/Lsfl5cKCey7Y99LH8CJh/9mPi6WQF/AL6gBccMB9+3gAAAABJRU5ErkJggg==\" width=\"24px\" >";
            uibox.appendChild(ui_rendermode);

            let ui_rendermode_ddbox = document.createElement('div');
            ui_rendermode_ddbox.id = view.GetViewID() + "ui_rendermode_ddbox";
            ui_rendermode_ddbox.className = "ddbox";
            ui_rendermode.appendChild(ui_rendermode_ddbox);

            let ui_rendermode_smooth = document.createElement('div');
            ui_rendermode_smooth.id = view.GetViewID() + "ui_rendermode_smooth";
            ui_rendermode_smooth.className = "uitxt uistart";
            //ui_rendermode_smooth.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACCElEQVRYhe1Xy4rqQBA9iqiIEh8gKKJx40436p+49l7wR+4nzCfMXfsJrsStbtSFiGAGRFc+gg98gH2pJvE2mfQQRwYHJgeaSleaqpPq6lS1hzGGZ8L7VO8AfA7WRAH8NqQqjJxl3RsATRgbAK+GlIO2QDJUxtgLY2zDPo+NYUOV+bHLAfq6PwB+icrFYoHT6YTlcnmbi0ilUnyWSCQQCARucwF/DbuaqLQjQCFT6OF8PmMwGGA8HmO73TrYrf+IRCIoFAooFovw+/2mXje28kMCXNHr9bhzIvEIyDmRKJfLN5+iOekpIAKPOocRRbIlgzQCtNdm+B+BuQ2UG3YRkBIwsdvt0O12oWma44hQ2FVVRaVSQTgctr52RkDXdSiK8s44EaKEFE+EmfmUeDYO0e/3USqV7iPQ6XQQDAaRyWTsjpQjtFotNJtNTKdT/mxH4MM/4Wq1wmw2w36/RzQaxfF45NLr9SKZTPJQX69XHhHKlfV6jeFwyNe12214PB7EYjHE43GpDye/Yo75fI7D4cAdkbQOIinqnOLpxcgl4BJwCbgEXAJSArlcDj6f41IhBZXoer0ufW/ngRpHJZvNIp1OYzKZYDQa3VVgCFTGa7UaGo2G2CPo1nV3teVEgqri5XLhpKjsUmNCklov0ufzeYRCIVSrVatd27b8W15MrPjSq9kPvx0D+AducOedPh2ShAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_rendermode_smooth.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACMklEQVRYhe2XTWsTURSGn2QSMw35rrViLU3RhWRVcCMIWl0I7vwJ/oOAkI0b61KyMf+gf0B0KQhaEUQQRbCGLmxMMULb0DRNYyftfCDnkkgNneZL7WZeGC53Zjjvc+89Z+4dPJ20fP34Z/KFu0AamGm3CWCu67VPQB0oA2vSFnPZxV6xXQEy+YKY3AEeiGk6lUQPBDgbjajn0j+scm1b9dZ3m7Qsq9MXmIfAs2IuW+8bIJMvLABZPRBIXDozwfyFWRJjeq/B/KG60WJp9Rsrm1UBEvNCMZdd6AmQyRfmgVdiemVmWo16FMlsvFv7rmCAG8VcdulwOL9bbAEY1VwkMSSWm1wBZAr/lo6L5TrEx2/eqkQT+nQyMRRKebuupr6ToAMB3L95nSefv7D4/qMCEYhO5ksldC+PrLVUAO2KEHNpY6EQl89P8aHyYzAAyf57166yvL7By68llc3tRPqtTmV0T/EpTcPv8zEdjzMZjRA/poJ6ZtnF0+NMxWMYpoVhmmqkq1s1DiybSmMHy3aYTSXZt2xlLO8YloVp2+jB3kk8VJqfi0UVUEwPKTMFJsamNXAs1yr4X/IAPAAPwAPwAFwBni4X1Td+VNmOQ2mr5hpF675RffG8PHHrtm9lszr3ulTWN3abTMYiBP0aluP0fcluuGO0qDQa1PYMOZQ+OuqY3v+xPJkgqGmkwmOYtsN4OMy+baltWdpqcw/Lsfl5cKCey7Y99LH8CJh/9mPi6WQF/AL6gBccMB9+3gAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_rendermode_ddbox.appendChild(ui_rendermode_smooth);

            let ui_rendermode_xray = document.createElement('div');
            ui_rendermode_xray.id = view.GetViewID() + "ui_rendermode_xray";
            ui_rendermode_xray.className = "uitxt uiend";
            //ui_rendermode_xray.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAClElEQVRYhe1XzaraQBQ+SfxJjN66E13o1YVuhLp2VfAFCn2AduemD3EfoYs+wO0DFHwBoUs3QuvChaJUBSXiL2gSo8mUMzfaXMn0GhXuhd4PhjM5mTnfN2Rmcg5HCIHnBH8hd9RuZ8N3Iskn297aDftvj8b9AoAFAPx02B92nw38BIwWJYTcWZa1JmfCnvuFEHLL4nHbA7jCOwD46HQahgGWZcFut6PPm82G2ul0Sm0kEqFWkiQQBOHw7MA3O+5vp9NNwMFhmiaMx2MaEPtuGA6Hrv5AIADBYBAymQz4fI++NHeSgNFoBIqiUOJEIsH8hCwB+xh+vx/S6TRks1lXAcxTgIFZq/aC7XYLrVaLOePSY3gxmAJ0Xb8ayXK5NFjvmPfAfD4HjuNUWZYtVVXDoVDIEynOn8/na1wIIUT2LAAe7ojQarWCarV68MmyrKCNRqM+v9+/a7fbeDR9s9mMnk9d12O4d/AEpFIpJvFJAtywXq9j8GDp20aj4TXEI7zcTfgq4FXAfyPA8z1gmubKNE2VEMJrmmYuFgvMAQSe501BEGSe58NXE0AIMRRFMbvdroRXq42w3Sg6nY7r3Hw+D7FYTLu5uRE4jgt4FtDr9YzJZEInOshPRq/Xw+tYwvHJZBJ/Rq4imHtgT34N9Pt9ZqyXewoKhQKIongxAf7Gi8Ui8/0/k1LMfGu1GlQqFVBV1TVAvV539cfjcSiXy1AqlWim7OR8SsA7Xdc/i6L4Ye/QNA0GgwFt2MdUfDKZ0H6z2aQpOCauSIr9XC5Hmyz/TQc0TfsuSdJXu1hxLJddmGAxcX9uUYLYbreaHcNTYXIMLFTe2+VYwWHfHI1b2uUYOEqy+6dKs0ur432duCf2jOctzwHgDwTm7JImQfRFAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_rendermode_xray.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACRElEQVRYhe1XMW/TQBT+EieHSYIaNaQSYiCICkGFoIgBiYmfwMLCAMwsFkNmytwp/wD+QRdGdiSWDuBULaoCVUXkkDZJm9hJfWd0r3EVgs+xCSqVyCdZTz7fvff5/L13z5jhXyMRJf7SauU5gBKAK0ObB7A8Nm0dQAtADcBXac2y8WaS71ACw8CvZNDFiwXkGMPy5Uv0bLEwj9w5hpbtoDs4Qm1/n8bNujV6L8m8DiMSSGBptbIC4JkM/PDaVTy5ewfXi4VAB9ZhN3B8u7mHtU9VfPi24xN5a5aNlagEPBn48e1bKOayYJqG/Hk9FoG27eCIczR7PbyrbhIRs2z8Fi8ZuBrAiwf3Kfi0KGQyeHpvXC4RCJwWlAT8LZwW0kfLcZReUqoHcmHb5kglk5hTfP8w9LlLGeIKETpPScCHdFDvHKBqNWjEF6NMyZSmkQiFEGj2bBqXohPCQ2k+H4noRALjkG+FEfu5bsV18QvOrghnBGYE/hsCkeoA9zw643uDAd3brkvFZsA5tn406bRMJhLQ08fusmlGa7TE5H4nlIBfx793DqnCqeb4Z8ZBv0+2gS4u6IxOQlk505oWn8Bup3NS7YQXXs+DwIVHZVpeql5CQqkBP/jfQJivs5sF779sn3zTaSDF+3FnV+lBpYGXG1bD2LAapRsLRdxcKFJfEAdy22WGjHTHlaDlkdtyX815Xae0yzCGLEujttc6zgTBSXiO64ILQfaP2/IAIo+GPyJzQxv2YyJtW1qzbKzF2rYZTh0AfgKkNAp8umpE4gAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_rendermode_ddbox.appendChild(ui_rendermode_xray);

            let ui_edge = document.createElement('div');
            ui_edge.id = view.GetViewID() + "ui_edge";
            ui_edge.className = "uitxt uicenter";
            //ui_edge.innerHTML = "<img id=\"ui_edge_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABDklEQVRYhe2XvQ2DMBCFH1EKurSUjEJJyQjOBhmBEbJByAaMwDiU0NERXRQixzhwln9QFJ5Eg+X7nn0G30XjOGJLHTalGxgQADoAo6OnmwJzUkDwm9Uy9Yro7ZELH4YBVVWhbVtjUpIkEEIgjuPZ2FIKnMMpDteAFzjF4RjwBtfFUQ0EhZPkQ/hx2pumeQZI09QITnOKomDBVQNXeSDPcyOwKu4Oyik4WREV1XXNSt/sP1CWpRV4mq/75HT6mbtgN7Ab2A04Ed0RmxmYLqiX+qAGNBXRJZgBDfwM4F2ZeDWwBietFaVW8CzLFuFeDSj1hBZOCnEIv8JJcmPio0lchJPkHbg7BPccOOnPu2MAD6hsnTXTpKWfAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_edge.innerHTML = "<img id=\"ui_edge_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAxUlEQVRYhWMYBSMeMBIbAFrdExMYGBjmUxpg10rzUexkIcXyCic7Bg91VZIt3XHzNkPHvkNY5ZjoZbmprAzpDqCm5QqCAqQ5gB6W43QAvSzH6gB6Wg4C2HIBOKuBDMGVcgkBYi3H5QCGBjcnsiwG6921j2jLQYBgNqQ1GHXAqANGHUA3Bzx4/2HgHACy/PTjJyBmIt0dgGz5tdL8BXR1ACHLaeoAYiynmQOItZxmDiDWchDAXh3v2kepG4iyfBSMAgYGBgYANjF0QJ/SUbQAAAAASUVORK5CYII=\" width=\"24px\" >";
            uibox.appendChild(ui_edge);

            if (view.DemoType !== 2) {
                let ui_projection = document.createElement('div');
                ui_projection.id = view.GetViewID() + "ui_projection";
                ui_projection.className = "uitxt uicenter";
                //ui_projection.innerHTML = "<img id=\"ui_projection_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABhUlEQVRYhcWXzY3CQAyFzVaQDmiBAjhQAjeuOVAIN64UsAc6gApogRSQGwdWQiuttBIXJN4q0gwyw0zGdsjG0oj8jMef4jdjMwJAQ9rHoNE7AkyI6JuI7kRUE9HatEqTAsMokbYzgE8AY8m62uAFgC0LvQewBHAEcIsgXQHsAEzfATABULHFV5E5UxfwGoG5OdCFBWAO4Mct1PzOBD5jl4pzBOZXA7BhjpVLg0U3hwAiC1AEn3xjDBzqRgQwCz753Bg8ppssAJ9UuUUswVO6SQIUblt523bId5tukgAX9vLQId853SQBYqY51aS6yQJYTjWNbrIA/l5yqi0NuhED8NF2qnkrhToxAYRjDaBmPpqt+hSHd0T+YqSp5kqfpoc4cp//7IhKFvz0eGpMgcYn1kM8hNo3QLaH6BNA1EP0BSDuIWKL1W6bWQDUPQS/+cKr5WoBBzD1EOGDhbIWcHHxTy4+mNpeSmpBaOoeQjrxnbXABBAOXwvuLt/Wtu2pFgxiw/47JqI/Uf1aiMFmIFYAAAAASUVORK5CYII=\" width=\"24px\" >";
                ui_projection.innerHTML = "<img id=\""+ view.GetViewID() + "ui_projection_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACNElEQVRYhe1WsVErMRB9ZijAVMCRKjp3YFeAXQGmAtmBYuNYwaEKbCqADgwVmEgppgN3ALMz70AIne4wzPwfeCN7Trvv6e3bvcMxjvGvo/fX+Mq6MYBLAFMAewBzb/S66fyfEFDWlQCuAAh4AeARwBOAcxJ5JpHHOPfkF6B9Zd1MWbcFsCX4HYALb/SIx17lP5XYKOvu4zqnBwCPg9tK4QcA197o54aUPdUomfNzApRYs0A/AG3sLdtQUh3JcQAWnQko6woCavZVbrgUcG/0roXwEEBFAmv2f6+syxOQvhJUJB5SPilwl5E4Jr2g8USBOW8vZK5TObECL4HEE2/0QxtoQHxG8F2Yy/ZVyrppKjeegj5vXfJ3F/Ap+yytWnqjL0LiVG7C5/s2BcCxEclWyrorFv02v+zzgq366HPinFymHr9R/LwXHX7zRvdyAJS7CvqcJBioU7EtoxTBRgJRkUXgjXr+l7kxVNbdMG/tjU4aUKJ1DwiIsm7H/T7jKN6mboNPQ9YKte2KdgKybllwIAS80TeZswK+4d4YNbWmEwFl3YpSy34fiJuVdTmiJcHrfrfujSQBmg8cxWXHBSRyr2jKSVN7OhHgLc680YMuBZR1Fb2RNVtTxIuoXiD3lDQH3OfrdUaz/Rhc4gsBb/SEy0LMtBUf0FgxeEGlhvRH1um5aPwiCpYI6IVb2ROchk2w87NvxoMJIP2SKfio/h7obLaDCARECqox5hKa/xb4GMf4PwLAOyge+ydtKTfqAAAAAElFTkSuQmCC\" width=\"24px\" >";
                uibox.appendChild(ui_projection);
            }



            let ui_camera_set = document.createElement('div');
            ui_camera_set.id = view.GetViewID() + "ui_camera_set";
            ui_camera_set.className = "uitxt uicenter";
            //ui_camera_set.innerHTML = "<img id=\"ui_camera_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACB0lEQVRYheVX7XGCQBBdM/kfOggdxA6kg5gKpAQ62NsKQgdiB6YD0oHpgHRAKtjMOnvkRA7Ow8QfeTOMyu3te7df4IKZ4Za4uyn7DAEZAFQA0OpV6b3LISkIvFJmNszcsB+N2qShfqcMEmbOmbkeIfWh1r1JjIA1M1fM3EYQ99Gqr/WUAAlbORHiuWiUo0vRUBEm8TU9iXPfTgQKzZfN++GKJz849ZAo11kKLCRfS723nFELrceXhVeAha1icFSH1EfjRBNGumhSgOvQ7e2sdxKLStdCZ0awAB+JjYp7Wp+4qwmwODjpgciiPe51n4Yxj8XF3L3uHPiMcBKLjssVkALACwC8/yLxu3Kk3R2bC2NMYYxJnCoO6f+Q+rHzIFWeRLjs3ntH3atcRLQDgBIRcx2d8lkAwOOFp5Uwl/a9gYiW+n2j67J2IsBCDDZEJOGqELFU40yFPE8Qv6l9LT+IKNdDrIaMhwRYyIYVERlVLmLWmr9CnVp8qY0QN0QkNkZtRiPXtSERhbTSToXUQ4tElCnpZmjdBSIupiIwBJueD62TCn7CLFF5utBf9EupEG2d39sY8r6A2w4iRPyzQaRcR5zUACLuAWDvVLFU/cNMUukQ8WsQsekvDhahGuZEdJVBhIitz2i0C3TjcRBpiwUPIl+rXiSgJ0Yc1poe7yAaCvMY/vm/YwD4Bmagap1CrIglAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_set.innerHTML = "<img id=\""+ view.GetViewID() + "ui_camera_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACHUlEQVRYhe1Xu3HDMAxFchnA2cBqWcUbSBs4G9gTUC5YS65ZxJwgygT2BtEG6tjKG0QbJAff4x1PkWRacazGr5HBD/AIgCBMd0yNhzH2hTZzInonopiISiJaWyWPY3RdREBoMyOijIhSImKDW8hMaMeyVbL5FwJCmxTGGBurZOHNrYjoDSKT2F2NgNAmhrvnODErd55gwwXGG3gmg3c4LOVoAq04H/jUnhEJEg48bjxy7I1lSH48dhieCW3YcA1liVXyFUQqnHDW2uY8wvMx1icYr1kf8uc8ARhegfmC3Sm0+fTCMIST17D+iP1r6KtDCTimmdBmCfdtEdcQHJGITHzpJW6wBxgR4rfHaRqrZOTlQRca3A5e12DfHnqiPuKdBJi9VXKNODIq5EUBZe1rtsN4gXUVxjl/LkvCFpHSKpkgjjHimFolNzDIoYkgp5iPkT9JyDUcJOAR4ZMvcNWk0KZGtuf8hSwxv/CL1Dk8hS5Eic2FNgUSi7PdleHCJV6oPodgAh6RU5UT2ny4xyjE1X0ICkEPkRJ3fbRxxmgCQpscYchvTkBo8+IVmAzy7QigLA/JfyPQ93B4aFDhCN/BJmRI36/nWGjzhZ+bc/dZaPNtlRzsKfxmxSr53J7v8kCE958TrEJDcjF4H+9HuA5978FFDUm70HR5APuCG5JRLZlrPH0CiPP1WrIOItM0pS0S07XlLSJX+2Nyx7Qgoh8N6BPrVpEljwAAAABJRU5ErkJggg==\" width=\"24px\" >";
            uibox.appendChild(ui_camera_set);

            let ui_camera_set_ddbox = document.createElement('div');
            ui_camera_set_ddbox.id = view.GetViewID() + "ui_camera_set_ddbox";
            ui_camera_set_ddbox.className = "ddbox";
            ui_camera_set.appendChild(ui_camera_set_ddbox);


            let ui_camera_plusx = document.createElement('div');
            ui_camera_plusx.id = view.GetViewID() + "ui_camera_plusx";
            ui_camera_plusx.className = "uitxt uistart";
            //ui_camera_plusx.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABHElEQVRYhe2W4Q2CMBBGP4z/dRRGYAQ30BHc4LgNHEE3cISO4CgwAaaGNFhb7hAo0XAJEJLm3msL18uapsGSsVmU/oVACaAZeV0HCTBzzsznwVMLxw3ACUCuErBwAAbAfmK4EQU68N0McJczKJAKHhRICf8QSA23sfXeCwCXwDjjPaWo2jzihOashBI8sze3Asxc9iQzRGTaFSoEsGmvg2Yru1tAisSFYhyg36rfOwtWgVXg/wT8UiyF5v8eVLY1AjWAeyeptsioxkoCFl4Q0aNtyzSd0atsM3OsbFdE5A68PoEu3DaSRwXcSUTKdu1LxT7CMfBYuJySQDJ4SCAp3BdIDvcFpoZXEtzGW0s2EZyJqK+7igssEcueBQCeKn+ZIQl35yYAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_camera_plusx.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAtElEQVRYhe2WzQ2AIAxGq3EaptIJODkFJybAqVhHg9GDym+BcpB3NeR7NrQUOr9niC0AE3IGAJVbML3yR+aUGL7olW+poT75kTB8SRYoGe467xSgCHcKUIVbBSjDDbYuuG+rYkJi2w4lf8KE3JGhwfO2b8E2rI13EKVU4z3hYmlegS7QBcgErgnZRsD3JFcXCL0NVQWy9gGKcIN3FGPHa9Y+UIjofeDzh7nP8QV+H+j8CwA4AITobi5rI5SBAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_plusx);

            let ui_camera_minusx = document.createElement('div');
            ui_camera_minusx.id = view.GetViewID() + "ui_camera_minusx";
            ui_camera_minusx.className = "uitxt uicenter";
            //ui_camera_minusx.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0klEQVRYhe2Wyw3CMBBEJ4g7rVACJVACnUzcQVqgE5dAKUkFRrYMskhgc7B3D3ikVRQp2vfsyJ8hhADLHEzpAI57PnLOnQF4AKcKzDvJ2+tFnIEW8NxTFmgI96JAY/i756aAFnxTQBO+EtCGx3wuwwuAqQJ8JjntGVCznVCCkxzis5yBsRLb57ru+ZWlACsJoFznUszPgi7QBbrA3woslgJLPvRMBBKc5MNCYAXXFNiEawl8hWsI/IS3FpgleEq8kuWqlbHoKVZ5I0p3NO3YbsUAnvWizoBpwhvvAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_minusx.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA0ElEQVRYhe1W2w2DMBC7VkyTqdoJ+GKKfGUCOhXrFCGBlIa7xEdCkGj8ixybe1PD3+OBBsBY9yKiMTdg09D/aHZa8fABLT/EU0F+a4URftSAT56G/pMjLvHFFCBkY90X8BE1z0Yg9899pPg7AyXFEXAp2Kp1NNbtKhcMe5YBsdUWcf9bCTPJNjwbzcDlBqBdIIEr1rBQU2gpgFOwTkio9zXzQXsPJMczVwOxlay6B85YyZffA6KBGuKigVriooEC9wDMZyfZQVEfVY6ZhhuAiGYLCYjV3kCDjQAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_minusx);

            let ui_camera_plusy = document.createElement('div');
            ui_camera_plusy.id = view.GetViewID() + "ui_camera_plusy";
            ui_camera_plusy.className = "uitxt uicenter";
            //ui_camera_plusy.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABGklEQVRYhe2X4Q2DIBCFn03/t6M4giN0g3YENzhvA0doN2GEjqIT2GDUIBE4ouKP+v4Qkwvf85AHZl3X4UhdDqUDuMYUM3MFgFYyP0T0Gh8kHcgBlCuhMzgz51IDulABuG8MVxIDY+FtB/g0p8tAErjLQDL4koGkcC17GxYA6oU6ZY0hNURUh+BauyVhCE5EmR7NDlSe+fREipmLoUs+KSLS9Q/JUpoGQgmnBrgkCaVLdfxZcBo4DZwGom5Ewv0dFdtmFLsyuR0C6CuyGKlQByY4M5fCm1EfxZ7Y7g+q8cFnwIS/ATwj3s0V261tyvURroG71M9JRLOlXDKQDL5kICncNpAcbhvYGt6E4FrmLtgSDnOr+fTnf8cAfnFajtF7hmIoAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_plusy.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAt0lEQVRYhe2WwQ2AIAxFq3EaptIJODkFJybAqVxHY6IHhWIrtBf5NxLIe2lSWmj5fTpqAYzzIwCE0oKts70xByZ8Wme7cKE5+V4RPrEFasKx96iABhwVqA0/zzQBITjaPakuuC4H4/zXtiPBMYGoVzkxzm9U+JHXNiwIqXqSAqQ0gSagJZAcRFoC2e9YWuD5I0aVkBSI4KnZIiZAgYsKFO0DWnAxAc4+EY3dY5xWEPi0zLT8MACwA+NUe/49YUskAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_plusy);

            let ui_camera_minusy = document.createElement('div');
            ui_camera_minusy.id = view.GetViewID() + "ui_camera_minusy";
            ui_camera_minusy.className = "uitxt uicenter";
            //ui_camera_minusy.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAy0lEQVRYhe2X2wnDMAxFb0r/u0pG6AgdoZuo2iArdBOP0FGSCVwMTQiNW5lgSR/x/TAYjM9Bxq8uxgjPnFzpAM4lg5i5BxAAXCown0R0nztiBZTgfZGAIjyIAsrwZc6sgBU8K2AJ3whYw1O+t+EVwFABPhLRIMFTNE9CCd6lZqkAMz8qgQMRJfCtZCnXS0CVBLDe51Lc74Im0ASawGEFJk+B6XPpuQjM8JeHwAZuKZCFWwn8hFsI/IVrC4wSPKXoa7YzRW/Lg/+OAbwB1ntMfOwzPIsAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_camera_minusy.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAz0lEQVRYhe2W0Q2DMAxEDWIapioT8MUUfDFBOxXrFCHlA5zYnOsSVarvD8TlHSFcQqG/V4NOQD8vDyJ6eidsncYTs7PC+QBWP1drMA9WMOJXAxzN6zS+PHDJLwaoARcDcHO6/jq8GECAw6vfOnPZiu7n5Y3CFBXh+9jQb7g/xN883csGECDwmtH+AnfpeANUUQSIAGiAjzYiRMh2fKpjpKgsZXYVgNfxZb2WykrbkrVPYIYLgVS/GKAGXA3wU+eBu+BiAA/c6q96HgiFMhHRBp+vpCFCAZvmAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_minusy);

            let ui_camera_plusz = document.createElement('div');
            ui_camera_plusz.id = view.GetViewID() + "ui_camera_plusz";
            ui_camera_plusz.className = "uitxt uicenter";
            //ui_camera_plusz.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4ElEQVRYhe2X0Q3CIBCGf43vrsIIjuAIbnKwQUeom3SEjtJOcOYaq20tpZorROVPeODlvo8jBNgxM1Jmn5T+hoAB0ABghVGOKssWBIZh5oZ1UgrLWmt6ZqgDsvIKwPHjHj9zBXBxzvU1uywJbAl/1PQJRIH7BKLB5wSiwiWHyfwEoFCAy5EtQvA5AQ14lzXwkYBzziqxKyIS8HnNVg47QEoCGJ7zUL7mLsgCWSAL/JxAm1KgvV96SQQ6OBHVKQRe4DEFZuGxBLzwGAKL8K0FmhBcMn2SqYWIVj3v/vx3DOAG2P7IEccdVA8AAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_camera_plusz.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAtUlEQVRYhe2WsRGAIAxFo+c0TKUTUDkFFRPoVKyjh6eFGJCApDG/RON//jMmIPq9utwAlLEjACy1gblZ3zwHovnkZr1STVPwrwChOSGJ8P4Jq+u5zGPJRQE4zKMAXOaofLEydjsfQlaq3p+HZ9hHeL3poowtbbuibjmEUX5Vj11LdgGHBEAABIANIPZnZQEIRjIvwNtgagpQtQ9wmDcDoOwDrRLIXkYea3ntOD5Vvg+I/iUA2AERAIB1kyNstgAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_plusz);

            let ui_camera_minusz = document.createElement('div');
            ui_camera_minusz.id = view.GetViewID() + "ui_camera_minusz";
            ui_camera_minusz.className = "uitxt uicenter";
            //ui_camera_minusz.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABHklEQVRYhe2X4Q2DIBCFn43/21E6giN0g3YENzhvA0ewmzBCR9EJaDBqkKJAUPxRLyHE5OR7cPLATEqJI+NyKB1AHpLMzBUAimS+ieg1PjhXgJnvzFxGQmdwNaaXgCFRALhtDBdOAVridQf4NKZVQCq4VUBK+I+A1HAV5jYsANSWPGH0rmiJqPaZ0G5O6IITUab6XHuhWhlPEJFg5mJYpbXocwE8fEqpl8DlcGKA+zihb6mOPwtOAaeAU0DQjchzfwfZ9mTFzLzkyZ0yICL6+KoMCdcK6PDS82YkNNe02XarH3hrAnR4A+AZMLEl2+5MUUsfYQx8KUb4rJQ2AcngNgFJ4aaA5HBTwNbw1gXvQ/mA1hoZH5Ux5mr7879jAF+ZzP6b+DXT6gAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_camera_minusz.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAx0lEQVRYhe2W3Q2DMAyEr1WnYaoyAU9MwRMTtFOxTlEkpEJwHF8i8oLvmct35Mc2XLfXw7oB3TS/AXxqN2wZhwPzxcLjBVh/rCdh7lmwxa8G2JuXcfjWwFP+ZIAW8GSAVnAxQEt40OlGd9P8Y6GCRHhYO/uKtACWcKw/+wyvlgfwAB7A1I7xr3DVtaAoAFNepWqnteRsgBhumYy2HYi/F8NT8wAxlpngaoAKOKzwoFQ37Ev/fHfWpjujtePSeYDyN50HXK6TAKz5UqaRw2vK6wAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_minusz);

            let ui_camera_plusiso = document.createElement('div');
            ui_camera_plusiso.id = view.GetViewID() + "ui_camera_plusiso";
            ui_camera_plusiso.className = "uitxt uicenter";
            //ui_camera_plusiso.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACB0lEQVRYheVX7XGCQBBdM/kfOggdxA6kg5gKpAQ62NsKQgdiB6YD0oHpgHRAKtjMOnvkRA7Ow8QfeTOMyu3te7df4IKZ4Za4uyn7DAEZAFQA0OpV6b3LISkIvFJmNszcsB+N2qShfqcMEmbOmbkeIfWh1r1JjIA1M1fM3EYQ99Gqr/WUAAlbORHiuWiUo0vRUBEm8TU9iXPfTgQKzZfN++GKJz849ZAo11kKLCRfS723nFELrceXhVeAha1icFSH1EfjRBNGumhSgOvQ7e2sdxKLStdCZ0awAB+JjYp7Wp+4qwmwODjpgciiPe51n4Yxj8XF3L3uHPiMcBKLjssVkALACwC8/yLxu3Kk3R2bC2NMYYxJnCoO6f+Q+rHzIFWeRLjs3ntH3atcRLQDgBIRcx2d8lkAwOOFp5Uwl/a9gYiW+n2j67J2IsBCDDZEJOGqELFU40yFPE8Qv6l9LT+IKNdDrIaMhwRYyIYVERlVLmLWmr9CnVp8qY0QN0QkNkZtRiPXtSERhbTSToXUQ4tElCnpZmjdBSIupiIwBJueD62TCn7CLFF5utBf9EupEG2d39sY8r6A2w4iRPyzQaRcR5zUACLuAWDvVLFU/cNMUukQ8WsQsekvDhahGuZEdJVBhIitz2i0C3TjcRBpiwUPIl+rXiSgJ0Yc1poe7yAaCvMY/vm/YwD4Bmagap1CrIglAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_camera_plusiso.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACHUlEQVRYhe1Xu3HDMAxFchnA2cBqWcUbSBs4G9gTUC5YS65ZxJwgygT2BtEG6tjKG0QbJAff4x1PkWRacazGr5HBD/AIgCBMd0yNhzH2hTZzInonopiISiJaWyWPY3RdREBoMyOijIhSImKDW8hMaMeyVbL5FwJCmxTGGBurZOHNrYjoDSKT2F2NgNAmhrvnODErd55gwwXGG3gmg3c4LOVoAq04H/jUnhEJEg48bjxy7I1lSH48dhieCW3YcA1liVXyFUQqnHDW2uY8wvMx1icYr1kf8uc8ARhegfmC3Sm0+fTCMIST17D+iP1r6KtDCTimmdBmCfdtEdcQHJGITHzpJW6wBxgR4rfHaRqrZOTlQRca3A5e12DfHnqiPuKdBJi9VXKNODIq5EUBZe1rtsN4gXUVxjl/LkvCFpHSKpkgjjHimFolNzDIoYkgp5iPkT9JyDUcJOAR4ZMvcNWk0KZGtuf8hSwxv/CL1Dk8hS5Eic2FNgUSi7PdleHCJV6oPodgAh6RU5UT2ny4xyjE1X0ICkEPkRJ3fbRxxmgCQpscYchvTkBo8+IVmAzy7QigLA/JfyPQ93B4aFDhCN/BJmRI36/nWGjzhZ+bc/dZaPNtlRzsKfxmxSr53J7v8kCE958TrEJDcjF4H+9HuA5978FFDUm70HR5APuCG5JRLZlrPH0CiPP1WrIOItM0pS0S07XlLSJX+2Nyx7Qgoh8N6BPrVpEljwAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_plusiso);

            let ui_camera_minusiso = document.createElement('div');
            ui_camera_minusiso.id = view.GetViewID() + "ui_camera_minusiso";
            ui_camera_minusiso.className = "uitxt uiend";
            //ui_camera_minusiso.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACIElEQVRYheVX223jMBCcHO4/6uBUgjs4dxB3cEoFcQfkdpAOzqkgTgdKB04HcgdKBTxsMBQohpIoxoE/boCFQYrcGXIfkm+cc7gmflyVHcDPtRtEpAawB9AYYyrO9QAOAB6NMd23CBCRLYnvEo9vATyoicgLhbRfFiAiesIdAAvgV6ZWFXgnImfuOxpj+lUCeM2W5LeZxDFU8F+9DRE5qr9UeEYCRGTHa/5dSJqCHuCPmoi8MjxHv26oAhFRdc8XJo+hvp/JNRawIsaXwMBV2gfeANwH43vOrcbaPvCk9R6XmDFGe8CBpdow5lnIEfCuiUNijV3NsRJVXNPz+ce8iFg+3y9V0fAuEJH4pfBKpweOU43ohr/h3hcKbOm3oZhRchtjPvambuCJpXLiCZuSRgTgzNo/MjwbHmAcHr0BNWvt3lpbcVw75w7Oud7Nw++fQ09fNXkq5fJ7EThR2znn2gWHIXIEhGjJMXCG3wNdQS9I5UAOzkzmkYCSL5NSAcPeqzcirIyjJtOW6zVh9zSfvFuuyc6fHAGaxdZn8QxJKK7mnrkqWhSgGdtEp+0yTtZFt9JMVNakAD3JhnObzH6QQj/ha1KAV11R9amAdAon+qyC2/wkQOP2WHjaXPTk8PmULMPJD8gL4LPvqBWHLbk09jF8LuxSXFMCvFUzWbyENoj7JMeSgDhH7EIpdlHPWLQ1AkLbBiHqoya0yv7zf8cA/gG9Pcxsu3JUYAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_camera_minusiso.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACaUlEQVRYhe1Xu3HjMBB9vnEBvA6oFJHZAdWB3YFYAXgBY8kxAhIVkB1YHVgdSBFTqQR14JudeRhjIFAmaWmceBMKv923i7eLFX7lp+Vhjn1lbAqgBZAD2AEo+kqf5uiaBEAZmwBYAygBiMFXjgVQI+O+0ue7AFDGljQm8q+vdOetrQDUHAqI5mYAlLE5w53S40a85DUc+0o/4DM6DuSJ17KbDSC45y29PgV7PhyA4JxE43kMPy4A0BNRIGE90HDUkxgAby2nnicAHfVc8OMxcvYIICHyLrI+Sgg6Iz9aRuTvGAAJv2tl7Lmv9Dbi3Xv4u6/0MrLv2SNuEq6L/BnwZsH7exMDytinCMicv/NQuewnsDfqWQzYiQMQ0vSVLgA4r/bK2Jb8ECmCIwUNJ7JP9nN+KXqukXAoAg7IjqEt6OlRGbvpK31gSoJ5f5B58icnf5Zj0vAqAA+IkDEDYAFoZezR5bp8OdZcz6aQN0bCIRCSQhtlbEditQSRMs1e57wHoyJwRdJvnh8PgATbkGC5R0THDyHqxiPq7QCwmOzdPfeVdmkqsuPYcn3P/d8HIOWU+dx6+dwoY2syHsyMms+xA9ayfuTX9A8CkAeF+ewqXsa6sKLhMjhScn7FfRnn31k/BrkyFAGXzy+sAwlTrR4qqZyvuS/huRdXP6YAcC+WpNWW6NcTGJ/yHUn5jriCFe2UYgAWzGsJnRAv9arhV3nuGhHZn/J8S33R92BSQ0IvSrLdv4ozs6BxVzG7IYkAuWjJaGRNUnacP9+0JYsAuWhKXUd016Y0ABG25an3vW9bHgC52R+TX/lZAfAfywk44bFwwMoAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_camera_set_ddbox.appendChild(ui_camera_minusiso);

            let ui_walkthrough = document.createElement('div');
            ui_walkthrough.id = view.GetViewID() + "ui_walkthrough";
            ui_walkthrough.className = "uitxt uiend ddinui";
            //ui_walkthrough.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABCbAAAQmwF0iZxLAAABRUlEQVRIibVWgU3DQAw8RwyQDcgG7QbABt2AjsAIZYKKCdINgAnKBnSDsAEwwaEEP0oc+0nFc1KUKvb7/nzOp/hvyLg+yS2AFYBPAAcReSvGT7LlFO8km1LFN/TR/rV2pfd1EN+UIrgM4jXJay9Acqdt7NH1XQhZNDnCbGEmfxspeMqo9Np3FeS2djAGAhE5AThlSM7BRHE1+v0QFFk5z54zhLdhRM2y6Jy8emSwh582VWbtvcPbkJz4ICIfGcU93MlLuzs6O9oHua+BAjc/LWqM/Mdoxp3chGNG3fehR/JOC6z7HSlR7eR678TMt4jEmj7bWWR4iluTLexpOjNPDT+Yx8veKecId3urrey0lY1e8SSZxVvt/97zYJRXq29psnaLCJbC8WEg+M2DcxCqK6XATtwwIBcFOW4ApO/BS9E/DCEAfAH0iwET0DUb7gAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_walkthrough.innerHTML = "<img id=\""+ view.GetViewID() + "ui_walkthrough_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABkklEQVRYhe1WwVHDMBBcGAowHZCvX+4gSQWECkgqEHnoDXn7QVQB6YB0QNJB+OgLHeAOYDRznvEod6cokAwP788nn299uycJPXqkUNauOGWTLqSFsnZPAAyAQKABMPfWrM5CgIo/MksDb83nXxK4FOImM340roRESfdJkEIqVtauanO9NZtDSEkSfCs5196aJno/FH0FMOqEdwBm3pqdRkCSoBHiARUTe4iKt++9paZIIrDWkhgMhXhB5LIJOCXnholpk6EalyVAukkm4ghslRpFWbtYHp0AYSHEb+MAbVBaF/ZykgRojLguVIKxxPFkDJomkPjoJA54a9aKebnJSRMgL8RSbJR2z6QRlnyQ6kAgEc6FJXVjQEVGZe1eYilog9KkyCdAH57Tn4Xd7oMOqil3YCmGPK4DHdwzWkqbDDdBrDQ5BDh9WS9QFxpaX5J07F3iYAJ0Dxh3nB6e75SUsbcmFH4H8Azgi3tJvBH9FtGNqv2JvXo5EuRiqNwrzkIg9gt7LzglgUWHREMm7tHjnwHAD2jlb7TznvRMAAAAAElFTkSuQmCC\" width=\"24px\" >";
            uibox.appendChild(ui_walkthrough);


            let uibox_review = document.createElement('div');
            uibox_review.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
            uibox_review.className = "uibox";
            divToolbar.appendChild(uibox_review);

            let ui_clipping = document.createElement('div');
            ui_clipping.id = view.GetViewID() + "ui_clipping";
            ui_clipping.className = "uitxt uistart ddinui";
            //ui_clipping.innerHTML = "<img id=\"ui_clipping_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABeUlEQVRYheVXy3GDMBTcZMKV5Mgt0AFnTinBqcAugRJSgktwCS7BJXDlFFIAM3YF8jwszYhnWSB4mEN2RqNBfPZ9peVFKYU18boq+woG5ABOAPZm4W0F8vfeKtXAE0aulDqrG876uuP1RaAE8CHkfak9vwD4AlANRaBU8uh5PhSBzvO2bbsxBXEcI0kS+82fnuca3iIk8rqug+mJPMsyc3nR5HvXs+JdQORFUSCKIjhzziC6D3jI08UN8JBvAPzqeRkDBsKes1nWgNCcixowkvwI4E/Pd5jcBQGeyxfh3LDPMmACORVfA4kinOg5td/n7DaUDHuwATPJKzb3MNgFAp5T+2W6DsIMMKeaQNid5ARvCug8F8r57tGNMRsRP1hMOx3Zfm+qvGK73gHAVouce03gkGO2gFRantF6ykRaY73TsHupXt85vuOVZLZ05kqG8vjNImCwYREwOT9YwtapiB557hSQSwz7o6dnk9PgXSC2w43FP/87BnAFKZ1vLjbYOEMAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_clipping.innerHTML = "<img id=\""+ view.GetViewID() + "ui_clipping_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABh0lEQVRYhe2WwVHDMBBFPxkKCB2Yq06kBDoIHUAFgoPOxGcdsCqAEuggkwqSk664BHcAo8xqRqxlIyu2L/jPeJJJJO/br5VWWPRvJLR5FNp883xXcxjgggN4B/DE/7uaM7hV8iMJQGhTAPgakSMavFex9Ro4/7zm5ECnJqkBbrvQZu2e2NjrxBfmuOGD3wHY0283WQC5wen7FkA0+6kAfOYFBa4ANHMBcNsdwMYqWXVNGLMIQ9tfKbjLvHFABDUZAN/nJYBPAPdWyRrAkZ6WxlgCbnttldwAeEiZfClAmPkb2V5ExtVTAHDbD/T5wgdaJW/HBghtd5kfrJK7nBflAISZ7/sOGS+hzbmxxZwYCsBtr2nNW7YzxeoiDSDoZqHtbp+XVO0XqRcg0tUKZnvSVnOnYa4D/CazDk64MjVzq+RpEECH7VtqLC6bhk64JAltngmk1RNaAB13OG+7C1zR2e7vCLWvbqp2X3CuCZ2ENjuqGVACv7RKCD6WOltyCPDnHW7RolEF4AcbBbWygUbU9QAAAABJRU5ErkJggg==\" width=\"24px\" >";
            uibox_review.appendChild(ui_clipping);

            let ui_clipping_ddbox = document.createElement('div');
            ui_clipping_ddbox.id = view.GetViewID() + "ui_clipping_ddbox";
            ui_clipping_ddbox.className = "ddbox";
            ui_clipping.appendChild(ui_clipping_ddbox);

            // 클리핑
            let ui_clipping_yz = document.createElement('div');
            ui_clipping_yz.id = view.GetViewID() + "ui_clipping_yz";
            ui_clipping_yz.className = "uitxt uistart";
            //ui_clipping_yz.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABB0lEQVRYhe2X3Q2CMBSFP4zvmrCAPvGKGzAKI7CJbKAjOIIbqI8MQYITYEpaUwtYRLQx9iQ3JDTlfL389BDUdY1LzZy6/wpAClRAPVFV+sVtz4Aw3729zLYCdcbWgVQeL8BGTny11sC1z2BuAdgDRyA3W/eCVsBCQizMad94DVeykwfgpHyfAWTAcgLjSnZOlzK7A5i3QJhvJzDXZUI8yARoVl6WZVNjFYZhU0M62fkQCvOiKEYDRFGkAKzyn2IP4AE8wF8BxC4BYpkrMMPJtwByLZRk+oAtEU0pYZ4AZxcASd9AJ4DYSsWWOlZDt+IugIrHQPGurEHWBFDx6VOZsCX/c+oWALgBX4JJVxZHKrIAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_clipping_yz.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVRYhe2WwXXCMAyG//Z1gG7Qu0+wAdmgI8AEOeUccvbJE9AN2g1gA3rKHN2APhWZ5yYitmLChXyXEMe2fiTLEmYenqdUBxjr1gB2uQ5rq/KfzRel8U1blR9ao0Pin+9ofCN9j4bAWHfSGhX4E097JYfAWPcO4AdC3FIw1i0AvALYD3lODAEv/uQN1LD4o/8DQ/QEsHFi2Vbl1xgBDLn9OzZJCgEpb1jMkZ9bADV/L8it/LsJxsnNdOBGhewCGwvfVYewOz98l/aKpuEIVKkqCaiFMQ3rXAGHTAEqJAFN5p6q9ZKAvTCmQRXCKQ6hip6ArBw+U2QJuEHxEUPIVTEuYAqGSrIkQOVCASkLrvYTUi2ou3fBiOu4mwnpzUzuGfDrqSQb61ax+ZNcRJp+IqkpTcVYFxpcpvQDvZxnF3ov+PPQ+PSieyIIU8FzVjznjYtRkvGZGQD4Bf8pfZ0uDHfVAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_clipping_ddbox.appendChild(ui_clipping_yz);

            let ui_clipping_zx = document.createElement('div');
            ui_clipping_zx.id = view.GetViewID() + "ui_clipping_zx";
            ui_clipping_zx.className = "uitxt uicenter";
            //ui_clipping_zx.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABS0lEQVRYhe2Xz22DMBjFX6qcERIXLkjdoN6gGaGdoNmgI7TdoCOQDbJBO4J75BbBApQjHBy5+kxRZPyHxnAoT/qQLT3ze7KNsDdCCCypm0XpEwPEAD4BiJGqAbCB/518D9cIoOD3jv4cwDO1mc7gE0DB76h/ALDRlPRxgj9Z3yo3oUPFQggufpVbxuTK2batar7qvEHhZVmKoiiMAWxLoJv2vcHfT3tVVeCcW1fAFCA4XGrrCP8iwI76NW20P8FNAfYDOKj9ceF5BHAk7yS41NgSxJZx3wBO1L6Vj6ZpvOGmAEpvlm+9V9d13nCXAMG1BlgDrAGCB4iiaLkAjDGkaaq69awBJDzLMtVVP7N5Amjgu9lmwAd+9QAX8IMNLjV2HvBWkiQ/NYCbTk+9QuwBZ7iULcCL4+1nEtwU4EinHhepg4k3XOqf344BnAH5oC9/LqtvRAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_clipping_zx.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABTklEQVRYhe2WwVHDMBBFHwwFmAoYrj6FCkg6SDpwKvBJ50zOvuAKSAfQAU4FcNI5dJAOYMysZxRZkSWPfML/pPHK+n/1Je0y49/jJnQD8qougNeBaY/AJ5ABK2AHLIE98AAUWpUXnHeR5FutysM1YVqVJ+DeCDcyZyGivu21bxORbz3/L2RXzsBzlIBQcjtmkbfYaFV+iR1hAhKQryXz1pp3+bwPEjBB5h2GLUiY+cnIvEPPgt41zKv6x7WwgRc50YV5vSR8kPHGQd6uvdSqbLyr+wSExGL/H7yGU2MKAauY2BQCPmJiswWzBUkEyAvZwWmBvJDpLXCU5N42S214kxf0AkENSQi5URsaa85ahk9WYfrD6B3wFKajMafLHBf5aAEDVXFnkJ+vFabRAgJKcmO0YZmPfJQAH3le1Zlhgd2MOJGyHzDHzgM3Y0YPwC/LYbpe1v3oxAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_clipping_ddbox.appendChild(ui_clipping_zx);

            let ui_clipping_xy = document.createElement('div');
            ui_clipping_xy.id = view.GetViewID() + "ui_clipping_xy";
            ui_clipping_xy.className = "uitxt uicenter";
            //ui_clipping_xy.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABNUlEQVRYhe2XMRKCMBBFv460yFFS0+gR9AZ6MvUEegRtqG3oPQKhpYizmuiKCYIELOTP7AyZwL7PJiwwUkrhlxr/lP73BgYDTQysAGQAlKc4m8STmvDN9/doVVTXwANeFAWSJEGe541pYRgijmMEQUBDSrAwc1WNiE7adwCf8SVwGRAATnR9l3CSbRN2DV/puKlcgT7u3ABHZQMPOA3SNIWUsjGcoEKIqrI7DdBzPm1MdMu65mUDfA9cPMKlA/4m3geERwMuvTF4BSLeoVrKlofgR3383Fy0B3ScdaBlbHWeiOURSqlM3ZXp8W2Ow4zaGjCaf4JTdP06NmWf6rLP63TC3uAk3gdens8Wsr1clgAOtpR9fBGtXXCS7XvA548CwbdVJ/AK7DyCZR04afgzGgz8uQEAVxbyWWEoTMxnAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_clipping_xy.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVRYhe2UvVHDQBCFPxhyVIciqADowHRgVyASxTaxIlVgOjAd2FRgR4pFB+oARjN7M/pZfHtnmcR+iW/ke/fe7u07rrh43FgbkBblDGiArXx68ax3wBewlHUNzKs862neGcUfgA3wOjjAsl4JPwG+h2d7DUjlLR6rPDtYDCvm9y1f+//WQG4r5wRxpHMHuQ6bASE3Qv6MEJ9J5XT4O5OBTtuSSPFh5Q7vXgNHyFZxV3mtmN8O92tDuBenT2lRbtwaeDZEz+Ev87WlgpV304R80zsgB8+BtXHvaNodLA9RS+5V0RFfVHn24RH/GYocM6+loDepIeI+vtVAtHhalEkoXzOwjBGP5atXECte5VkTytcM3EdW7q4giK+l4E1+12lRmmKnYCQuXTEZGGU1BBJDTVxNwtEUTAHfPJzVQGwM/038bAZOjeEUMMdwNO3tFE9gIPgNueJCAfwCz7HE7yBYT5QAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_clipping_ddbox.appendChild(ui_clipping_xy);

            let ui_clipping_box = document.createElement('div');
            ui_clipping_box.id = view.GetViewID() + "ui_clipping_box";
            ui_clipping_box.className = "uitxt uicenter";
            //ui_clipping_box.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABCbAAAQmwF0iZxLAAABWElEQVRIie2VMYuDMBTHn2cdBC2d1IIODkpH5263C9438j7Sle69zdmxuuqiUO4QwUEkR4JKbdO0p/am+0Mgxvj7v2deEni2OBYfIeQAwNvIGD44jgsXd+CfALCakCTdoIPXdb0KggCKoniI5jgOGIYxGHuZG54kyWB8kMEteFVVkKbpTbjruj08DMNBFr0BCx7HMTRNQ4V7nge2bZM5URRdvV/AxYKeTidYr9ekYeV5DqqqUuF4fLPZkKgPhwNYlkU3aEuRVIumaaR1wtGxdDweYbfbgSzL1FmDNdjv932/LEuSNku+70OWZcw5V1U0t/4N/saA53nQdf05BhiOS1kURfK8XC7nNVAUZQDfbre4+42Pa7jcB+fCH93bZOfq4IIgYPgrvguYBjh1SZImwZkGv4ncNE0qfBaD9tyiwnshhN7ReH21pzFVXQZkxUeKXO5T/8Q4AcAPECXQBxuBeh4AAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_clipping_box.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAB0klEQVRYhe1WwXHCMBDcZFIAJfDWJ6QCoIJABUAFIg+/Pbz1CKoAUkGgAkgF4eU3JaSDZMScMmdbss7j8Ao7w4yRJe3e6nRn3PDvcSc1QBk7AHAA0OtiWpHpEudDS/IzgHGR6a82pMrYOYBN6N19C/JdR/JFawG0+NORF5ledCEvMr0NzYkeAVu8deRsfAngRK6AIttUno8AnNhJE3lUQAP5CEBOR8GTiRNs2fp1E3lQQIhcGdujsT2ApyLT59iGlTOfNZHHHPB2zmkzjgmRpPa92K6MDWZ+SkDpripj3ynyHv12JMS70KcxH+2S2R7MfI7kNSQyl1CPAIYkYkjEfTZWdQuxu88hKUTOzh1F6XGsTlLGTknoUrDnLyQOJKMg5D5HGP7kCGrRRvDB8sIjKV4i4KqQ5MBIKGDI/1APGacWSRxYCQWsKonqSvWACQq2cYmAXCggZ4XKXcmXItNrRn6gW1KC5AiiZTcwzxM8F5mesnevVDNqR5Jqx075m1DAngngDWxDzrgGdqoukjiQU+2fURQrsttfzxFrw5cc8N8NRD6nBlYjD0IZ+y2amFjvyN1zoKGVcJU6wCJv/BhxuFYhEpE71D7Lux4BQUR+ww0A8APXILPVZmwmmQAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_clipping_ddbox.appendChild(ui_clipping_box);

            let ui_clipping_inverse = document.createElement('div');
            ui_clipping_inverse.id = view.GetViewID() + "ui_clipping_inverse";
            ui_clipping_inverse.className = "uitxt uicenter";
            //ui_clipping_inverse.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABeUlEQVRYhe1XPW6DMBT+qMrCQCsxcwdmpvQAnKHpDXqEHqE3KDmDL9CJmTswR0oYYGCgeghXjutH7ECCqvaTHBHxnr/362e8vu+xJu5WZXc0IAfQL7RyualLCpbOlUc/965aQohZrFmWnfyfSsEWwCeA9zmEQRAgiiL4vm98z0WAyD/mEBPCMESapgN5URTY7/c/ZEwRUMmPAF7H511VVReRd12Htm2NcroBOvkGQCnflWUJG+jk5H3TNEZNNQV62N8API5GDKBcngORJklyQl7XNaultuEBwIOVixbgyJUuGNpQTcFi5ARK15TnEqYu8DhhIcTZw0h6SBGwwe+aBVRcaxrwHMfxqgZcBf8GrG6A831An+cEGlLcnKDOmSxeOorHJQFm5T2P3LDPpuf1vuXVWSAf2JPQEnKfp/FCM4lb1EAydbNyroELydlBd80I6OS5UcqhCG2XCVtO9xY18MJ6z9TAkh8gk+QENQK7BYmPNuSEP/51DOALKtpYq+Rs0BsAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_clipping_inverse.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABc0lEQVRYhe1WwVHDMBBcGAoIHfDWB6gA3AF0kFTgl9/Bb71UgV0CHQAVJC9/gQqgAzOaOYfLSU50tjPDDN7XjaXTrnXSnjDj3+MsdQOMdTcAPgB80acMwIuI/XgJoALwCuANwJpiP7ZsinyP80JBvgFwKxboi2sWP1H+AsCnXPs8kdzjsSnybYpgkf9A4r8B3MnxgyUw1i1pO8fCi3821rXJJWDkdVPkqwF/vhPvyelzKedFS8CSV7G6Kcil8KAEgQCe3BR5Tad4EDnlc9zL+bESdDWvjHUVLdpqRPSQI7IjISSZsS5QrcxvWfwu5x+9hsxspsDVEAFTIlMLkPd2JILdTHFC7QFU4e+XIJY0AvoSaI1IixQBKh/oA3XVSzmcIiBoIAPJN2ofMNYtxpIzRN8TKS+itbFuF9PzquwOlPcJdlUz/F5dP+e6S2Qt+TDG3vsu33dFH1N37MVJfOBIS97DqYwoidwj8PmJrDeJfMYMAPgBfU+KAM4LIqsAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_clipping_ddbox.appendChild(ui_clipping_inverse);

            let ui_clipping_disable = document.createElement('div');
            ui_clipping_disable.id = view.GetViewID() + "ui_clipping_disable";
            ui_clipping_disable.className = "uitxt uiend";
            //ui_clipping_disable.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA90lEQVRYheVXgQ0CIQw8jQP8SI7wG/gjMAIjOAJu4khsUPOxKJLn/6E1jfGSJiQPvaOFlj8QESxxNGUHcMrGZ7YZEcBVmcsBGHh8ZwPmFLB5+kTIvkktFL598reWgguAoLDzwL4WkQuIXxBRI39zFaEtQ5XQk45dvroXapDXBEhFNK1Vc9S7RnM3XVHTymd3yjQOlejQalyrbvJWAXtFNNWMVgFbIpoLlnk7/qkUmB5C02toWohMS7FpMzJtx6YPEtMnmVMk3xLh0py8FA8LhfIGYBIU2ol9lHhxrfUCKfmWiCeycI1EFNm8IOw185n/Mc35879jAA+wuUSQpzKIaAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_clipping_disable.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA1klEQVRYhe2WwQ2DMAxFfztB5+DECp2IE1NwYiJW4MS1KzBCFRGkCuwQ2wgXKV/Kifj/pyQ4QVERparrX2GctTgpvyc1GcAnjKrr6xPC69UvC+BHAWSwQMTaIXqR2gFMbTMDeAOYLRCb8NVzp4fEYGqbURvO1bIAWghpTRJAaqgBPgTINdZuWRbAUYDlvGQDcEHxkypcDMBAQBuuAiAgoA0PSnXCS3SvLXA9hK6/oWsjcm3FrpeR63VsCZd6cG9CUziWl9W4fVlR81KdUB3OQBQV/aEAfAH019UzDzN1LQAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_clipping_ddbox.appendChild(ui_clipping_disable);

            let ui_measure = document.createElement('div');
            ui_measure.id = view.GetViewID() + "ui_measure";
            ui_measure.className = "uitxt uicenter";
            //ui_measure.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+UlEQVRYheVX0Q3CIBB9Nf7LKN3AEVzBEdhAN7FO4gqOohNgMLS5Eto8W/CIvuT+Dt6De3eBxjkHTWxU2SMBHQBHRpdLgCzBp7VocgjYLtg4q2nUPZC6gRgm1NxoCbAADiXIPVImTHnAihs4zeQVEyDB5lGoahBVK6AF8BATUkXALjdxD9aEreiC20xeMQESv9UFzCREVIKvCzgCuJQg92BKcAfw1BZggumk8djXUyqGF9WaLliLNw9rwhSWtuHoAKwAW6oL4EsQogeiOLs04jw2RjyMB+In2X4ijz6zXK8xikfrqxzFbJtlaUd5A9ccG5IYuP78dwzgBeKcwYP65kn7AAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_measure.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAeUlEQVRYhWMYBSMeMKIHgFb3xP/4AuVaaT6GHqoCfA4g5DhyANNAJ4EBdwALPkmt7okKDAwM9+nnnNE0MABgNA2MpoHRNDCaBkhOA5RGA8H2BC3TADb9o2lgwMsBvA64Vpr/ALnhOizLAZKb5ZQCmjfrR8HQAgwMDAAg+jVhyR0hGQAAAABJRU5ErkJggg==\" width=\"24px\" >";
            uibox_review.appendChild(ui_measure);

            let ui_measure_ddbox = document.createElement('div');
            ui_measure_ddbox.id = view.GetViewID() + "ui_measure_ddbox";
            ui_measure_ddbox.className = "ddbox";
            ui_measure.appendChild(ui_measure_ddbox);

            let ui_measure_coordinate = document.createElement('div');
            ui_measure_coordinate.id = view.GetViewID() + "ui_measure_coordinate";
            ui_measure_coordinate.className = "uitxt uistart";
            //ui_measure_coordinate.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7UlEQVRYhe1XwVHDMBBcmPxxB/jDm7x48UgBzGAqwB3gDjAduISU4HSQdOAS7DcfU4EYwV64CEnBQzTmwc3c6KQ7SXvynU4+M8ZgTjqfdfe/AGDh9CsArwCuAIwAGjWesW/bEkAPYM1+5djntHGpo67Zj9sYIJfmk1bGmIZyyb6ltbLdciw3xtSUa6Vf0sZyR/2o1irFFs6iHeXMGNNzkrSZspWFWmWDALe0LajvuNc3AK4XhfmiwrP4VunLwOayRqPG5MQ++rEgXCl56dFXbAfGgks5x62+Dm0SAmA3fAKwAbAD8OwB0bHtA2vYzS8YjGMIgD6unt9LvtPIIMt5ZHbsjnKlPtvWiYtKyS5JTOxjZuEgtp7eAmjpoXj3wBO4Yb9l+6Jsco/OJWtzf6BTJ5DR63UkoisnoNw0js0F9QcZlboWZCpYt+RDOoL4t1yqGMh9a6WuBeL9JpQtKQHYe+SachMySglAitHg/faJAdh0e6Qc9D4lAPH+LXBNJwcgwddGr2FLc6ReLA0Lposh9xybQnL8u0ih8p5AESggJvAe8PFy6hy3GkrVK8jynIq9eNy7for9HkAWQB47lRjVPwWQIguGY7mvSd4DIydeOs8nkQdV709LJw7CyexOKFQwSjAl29zy/8/pvAAAvAMVTClC0jNpPgAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_measure_coordinate.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVRYhe1WwXHCMBDcZFIAJThfvUgF4AoCFQQqEDz8Tnj7EVSB3QFQAXQQv/zF6cAdJHOZFaMYKUDiSR7xzniwD2n37nR3Njp06PDXuGrqq9T0AbwAmAN4BrAEsACwB1CUiY5VasQ+A3ALYAggAxCXid6R461BK/sfAdyViS7cP649CdAUssIzCgimDmFNUrl2VpyIAYy5Rrie5Jfcn+BzQDKwkRturACMRLRMdEW7EBsAEwARHTqAzgwA9BynN+Q+ywH3OCI+Dhrrlowwb0Qv+4bM3LyR8iMHbjwOVM59xmeJMFOpGTGVkYiq1Mj9q+Os3Z/RuZ5KjWQx93AHM/CRPkYhJNMy0TlJHliY9iwLh9TaI9oKZs0exT25T2bAsAvkzGNrLBM9ZaR7e+ZloufOviE7oWARHsBg+k49/AOo1Ew88+AIvhr4MUSchbg4xXU0CVsQt5M0t3Xzaw5QfAtgfY64oLUjcMQrvkfOgjcDKjXStyu2Fti/Y47g0PotH+PQOh9CGVhxeIx5WYe+Eu9dKi7wDSIwcol4TRGEHKA9+o74Vw54Eejr2pmAFyNUAzalto/lnV+7o7kthGrAfkyseNW0dejQoV0AeAfdqLCWnV+eeAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_measure_ddbox.appendChild(ui_measure_coordinate);

            let ui_measure_2posdistance = document.createElement('div');
            ui_measure_2posdistance.id = view.GetViewID() + "ui_measure_2posdistance";
            ui_measure_2posdistance.className = "uitxt uicenter";
            //ui_measure_2posdistance.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+UlEQVRYheVX0Q3CIBB9Nf7LKN3AEVzBEdhAN7FO4gqOohNgMLS5Eto8W/CIvuT+Dt6De3eBxjkHTWxU2SMBHQBHRpdLgCzBp7VocgjYLtg4q2nUPZC6gRgm1NxoCbAADiXIPVImTHnAihs4zeQVEyDB5lGoahBVK6AF8BATUkXALjdxD9aEreiC20xeMQESv9UFzCREVIKvCzgCuJQg92BKcAfw1BZggumk8djXUyqGF9WaLliLNw9rwhSWtuHoAKwAW6oL4EsQogeiOLs04jw2RjyMB+In2X4ijz6zXK8xikfrqxzFbJtlaUd5A9ccG5IYuP78dwzgBeKcwYP65kn7AAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_measure_2posdistance.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAeUlEQVRYhWMYBSMeMKIHgFb3xP/4AuVaaT6GHqoCfA4g5DhyANNAJ4EBdwALPkmt7okKDAwM9+nnnNE0MABgNA2MpoHRNDCaBkhOA5RGA8H2BC3TADb9o2lgwMsBvA64Vpr/ALnhOizLAZKb5ZQCmjfrR8HQAgwMDAAg+jVhyR0hGQAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_measure_ddbox.appendChild(ui_measure_2posdistance);

            let ui_measure_angle = document.createElement('div');
            ui_measure_angle.id = view.GetViewID() + "ui_measure_angle";
            ui_measure_angle.className = "uitxt uiend";
            //ui_measure_angle.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABmElEQVRYheVX21GEQBDss+5fMpAMxAgkBDKQEMhAzOBC4DI4M8AMMIMzA4xgrNVZ7dva41G7wIdTRbGPorp3pmd22IkItrSbTdFnEEgAFAAOADoAouNgmxqCM4A7z/oulMAUD6QDe/kaBMzpMwAPWxEw1gOodfwJ4DUWARgNTHhy+bNKRDIR6UWknPj91WeuCD9GNDHbpoSgogwoY4IbG/NAoqe/BfCuYoxqYx6oFdzYPYAmNoEhgaQkvJ7GTajw+BnabAk8UWBr9dIECgLrNO3M+onWsyUJnOXSrBcSCke7FIGaoA80toAlraWxCfAJT7pWEWCuaz0RjErACq13TmdDYjPAeiY4DDzJBlReETFXpEEE9lQSuMMpnJsu0bcpSi3NofO51tiixqV47e70u5vaezZe9F3qJfTmnPJZ30e9J6A35JPzPdSLj3qLNs73P0bxcGPaXtGDmxFw+gVfSrfXcDZvy4c8UKrq3ZLbaHlOnPrReS4qX+d0geMTYXCrPXZmxtk8BL4sWDUd2QPHFXF/sf753zGAL7fxpb+NFqZ/AAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_measure_angle.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABAklEQVRYhe2WsQ3CMBBFP4gBGCG0mYINGIEwgUXhnj4NmQDYgBGSDajcwgjZAGTJQpZj4jh3gQL/xoqV+L+7/FOCpL/XjNKAvKwyAHd3X0kx+FwSgANTADjFAsyZzXexz5IBbHMlxfmrAFRzrdEZ4DAfDcBlPgqA01wrKgOW+Z7DPArAMn8A2HKYDwawzFtdPYAsL6sDB0AwA3bbTeUaogEgAKyUFC0FoLcDTuCOBmIN4GZuKSjmvQC+tCspagC16cQVwGYSgMCoXUwXGrPyAgyYcz0FS7OS1QlhXlZPjoM/KfipdgE4r33FsfwPUPRzgI6mzEB6BT4tfJtTj2JS0lsAXj2dcruq0ed2AAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_measure_ddbox.appendChild(ui_measure_angle);

            let ui_note = document.createElement('div');
            ui_note.id = view.GetViewID() + "ui_note";
            ui_note.className = "uitxt uiend ddinui";
            //ui_clipping.innerHTML = "<img id=\"ui_clipping_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABeUlEQVRYheVXy3GDMBTcZMKV5Mgt0AFnTinBqcAugRJSgktwCS7BJXDlFFIAM3YF8jwszYhnWSB4mEN2RqNBfPZ9peVFKYU18boq+woG5ABOAPZm4W0F8vfeKtXAE0aulDqrG876uuP1RaAE8CHkfak9vwD4AlANRaBU8uh5PhSBzvO2bbsxBXEcI0kS+82fnuca3iIk8rqug+mJPMsyc3nR5HvXs+JdQORFUSCKIjhzziC6D3jI08UN8JBvAPzqeRkDBsKes1nWgNCcixowkvwI4E/Pd5jcBQGeyxfh3LDPMmACORVfA4kinOg5td/n7DaUDHuwATPJKzb3MNgFAp5T+2W6DsIMMKeaQNid5ARvCug8F8r57tGNMRsRP1hMOx3Zfm+qvGK73gHAVouce03gkGO2gFRantF6ykRaY73TsHupXt85vuOVZLZ05kqG8vjNImCwYREwOT9YwtapiB557hSQSwz7o6dnk9PgXSC2w43FP/87BnAFKZ1vLjbYOEMAAAAASUVORK5CYII=\" width=\"24px\" >";
            ui_note.innerHTML = "<img id=\"ui_note_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAmklEQVRYhe2WsRGAIAxFo+cg1mzlBFRMQcUGTkWrm+jRA4kxgSavxct/5wcOMIzZLLV8F9Oj4ZWDr+YNEWjNXKWDvmIC0wU27AMX0w4AF2c4ZdejAjn4u3VcJbAKrILfFZDvd66AdgWoABXuZhWroPwpF1Nv1MESEKrgyMGftYURp6AZPkKgG64tgIZrCpDCCxqPUnK4YcwHAF6g0zxe5+yl1QAAAABJRU5ErkJggg==\" width=\"24px\" >";
            uibox_review.appendChild(ui_note);

            let ui_note_ddbox = document.createElement('div');
            ui_note_ddbox.id = view.GetViewID() + "ui_note_ddbox";
            ui_note_ddbox.className = "ddbox";
            ui_note.appendChild(ui_note_ddbox);

            let ui_note_surface = document.createElement('div');
            ui_note_surface.id = view.GetViewID() + "ui_note_surface";
            ui_note_surface.className = "uitxt uistart";
            //ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVRYhe2X0Q2CMBCGf4zvOgojuIEjuAIbyAiOUDbASXQUmOBMDcUD2sKF0vrAn1xo0ubuS689rhkRIaUOSaMDOM7MFwDOAn81gHcoAAXgJnHWKQgAD/70OM0BXKWEA+lDODJFPynLvLGciBoaqvSst1qI4Ppbd2MxAL8FxSjnekwOewE4AWgBXKR55+IAktNutCr4V2w7Sooj5UpBLA2u9lwhGitbCTmp+8lL8Q6wA/wVQJMCgNeBR/e1leT7VgBLe0KzKFQh6v1sdQaU4y860VY74HPa8jTHvgWmf+gVE8DavMQCcHZOMQC8bZu0H5C+42Z7xqU7UAkDLwqutT9O0wIA+ADIm4JYaR7kEwAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVRYhe2WzVHDMBCFXxgKoIT4qhN04HQQKiCpQOHgM+Ssg1EFDh0kFUAHyclXUkI6gFnmiRHGOLLjn4vfTGY0sq33raTdDUYNrUmIvzJ2CiAFMAewBfCYJ/rYBnslgDL2BsAKwBMAMVxzPOX4JU/0qRMAZeycUQuEzRP97D2TsQZw4m5sWwNQxt7SOAawocGfKLk78t4CwDvfO9QFuC6Z2zOy+6rICLVUxu4AZPwu6E75uvpnXqLLlLGrqo/5PKtrGgLgIFJl7F4ZGxeMY5nnEcgxRU0Byo6gKLkTb8pYMXoF8OCde+TSURnbGYDTgr/jufvRFYDT3aW576ssDT+rPsgTPWFl/GhqKmu4cZMdkAWOcub+QqEqBliVBb2oDGAzKECe6KVcNKZZqViGuwEgxCFP9ExKLcvyj1j9Gl/AIAAPxFW5tTct1a9Z1akLQIgTW7EDifzWfKmC05AltzVjp0Z1IFTK2JS9ZBgAmseFuV9/WvouRGI+Gwrg27zYyPoCKDUX1W4mTue6Zoj5qFEA8AW9s4xjlG8ccQAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_note_ddbox.appendChild(ui_note_surface);

            let ui_note_3d = document.createElement('div');
            ui_note_3d.id = view.GetViewID() + "ui_note_3d";
            ui_note_3d.className = "uitxt uicenter";
            //ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVRYhe2X0Q2CMBCGf4zvOgojuIEjuAIbyAiOUDbASXQUmOBMDcUD2sKF0vrAn1xo0ubuS689rhkRIaUOSaMDOM7MFwDOAn81gHcoAAXgJnHWKQgAD/70OM0BXKWEA+lDODJFPynLvLGciBoaqvSst1qI4Ppbd2MxAL8FxSjnekwOewE4AWgBXKR55+IAktNutCr4V2w7Sooj5UpBLA2u9lwhGitbCTmp+8lL8Q6wA/wVQJMCgNeBR/e1leT7VgBLe0KzKFQh6v1sdQaU4y860VY74HPa8jTHvgWmf+gVE8DavMQCcHZOMQC8bZu0H5C+42Z7xqU7UAkDLwqutT9O0wIA+ADIm4JYaR7kEwAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_note_3d.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABrUlEQVRYhe2WvVXDMBSFLxwGYIS4VUU2cDYIE5BM4KRwDdQqwpvAYYMwQdggqdyGEbIBnMe5zhHG0ZGFEprcxrL+7qe/J+Gi/9ZViL+xMgCwADAGsAIwr8viIwW7F8BYuQUwA/AIQA2fmR4w/VKXxf4kAMbKmKNWCKnL4skp03QBYM/ZWCUDMFbuaJwDWNLg1yg5O1pvAuCd9bZ9AW468jYc2b1vZISaGitvACq2C9pTrq49ZZWxMvM1ZnnV1zQEIOP0L4yVjbGSt4xzzecSLFk/Sl1L0Ezv3FgRjnBtrKjRK4AHZ92z5jgaK+kAHBDtfOSciAmPo3d/9JFvD7ggajbk7zCVuarrGH7WZdG5m5syRsZdrOmx/g8mIWW+ej6123UugbEyiek8Rl0AS8aANaPieQHqspg6G05jQMWwe1D7PykAIbZ1WYw01PIK3jVRkd/oDRgE4IA0UU4YB8BvXNTpC0CIPa/ijG+AzL2a/ypvJGyBaARMZtwoGCBGxooul/cknRSA5nkr78ejJeguSCg1H/0XwLd5+3l3LoBOc1XvN1yjHpfRUfOLLgKAL8ajqiw9irYDAAAAAElFTkSuQmCC\" width=\"24px\" >";
            ui_note_ddbox.appendChild(ui_note_3d);

            let ui_note_2d = document.createElement('div');
            ui_note_2d.id = view.GetViewID() + "ui_note_2d";
            ui_note_2d.className = "uitxt uiend";
            //ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVRYhe2X0Q2CMBCGf4zvOgojuIEjuAIbyAiOUDbASXQUmOBMDcUD2sKF0vrAn1xo0ubuS689rhkRIaUOSaMDOM7MFwDOAn81gHcoAAXgJnHWKQgAD/70OM0BXKWEA+lDODJFPynLvLGciBoaqvSst1qI4Ppbd2MxAL8FxSjnekwOewE4AWgBXKR55+IAktNutCr4V2w7Sooj5UpBLA2u9lwhGitbCTmp+8lL8Q6wA/wVQJMCgNeBR/e1leT7VgBLe0KzKFQh6v1sdQaU4y860VY74HPa8jTHvgWmf+gVE8DavMQCcHZOMQC8bZu0H5C+42Z7xqU7UAkDLwqutT9O0wIA+ADIm4JYaR7kEwAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_note_2d.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABRUlEQVRYhe2WwVHDMBBFHwwFpIScdUo6cDqgA9yBJwdXoUOiCgIdQAWhA3zyOR2EDmBE1jMbYUdxRjEM+F9krWTt3/3SSoz497gJE2Cs+0iUlEVdFq+xSXdtxrosvhHrA2Pd9tzprQQ0jHUzYCLEviIy1k2BqSIcjbQLtxHnK+AN8BFtVWR5YxP73liXJycAvABLkWQNZHpQ7HNgB2wkM+kI+NTWZbGWrl/8vWVO5UlK974vgege4CBFLosvO6ZU0k76EohJ0DjfAI8qGyEaaXZ9CZzMgHLud/mTsS5T0SJ9L81K5HlOSgB4kDZTUS7UeHje/WlovjP1fYSTdebcSnhpxQz/i+6Ba6NVgoT3wfXwZyQYCfzOU5AKcp3PfoyAOM8CW6U7Q0tQBaV8UAKVPFSP3hRDEWh17nHx67dHJex0PmIEwCemz2ldYmOwLAAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_note_ddbox.appendChild(ui_note_2d);

            let uibox_config = document.createElement('div');
            uibox_config.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
            uibox_config.className = "uibox";
            divToolbar.appendChild(uibox_config);

            let ui_config_visible = document.createElement('div');
            ui_config_visible.id = view.GetViewID() + "ui_config_visible";
            ui_config_visible.className = "uitxt uialone_line";
            //ui_note_surface.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVRYhe2X0Q2CMBCGf4zvOgojuIEjuAIbyAiOUDbASXQUmOBMDcUD2sKF0vrAn1xo0ubuS689rhkRIaUOSaMDOM7MFwDOAn81gHcoAAXgJnHWKQgAD/70OM0BXKWEA+lDODJFPynLvLGciBoaqvSst1qI4Ppbd2MxAL8FxSjnekwOewE4AWgBXKR55+IAktNutCr4V2w7Sooj5UpBLA2u9lwhGitbCTmp+8lL8Q6wA/wVQJMCgNeBR/e1leT7VgBLe0KzKFQh6v1sdQaU4y860VY74HPa8jTHvgWmf+gVE8DavMQCcHZOMQC8bZu0H5C+42Z7xqU7UAkDLwqutT9O0wIA+ADIm4JYaR7kEwAAAABJRU5ErkJggg==\" width=\"24px\" >";
            ui_config_visible.innerHTML = "<img id=\""+ view.GetViewID() + "ui_config_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACD0lEQVRYhe1Wy23CQBQcotxxOoCrT1BBoIJABYQKFg4+E84+wFYAVABUgFMB5OIr7iAuIXpoVlotNlkDyiWMZGk/j/eZ91nwwL9HzYeAMNYjADNux2mk5vcirtSBMNYLADkATeM9Xm3ECQAKQJBGanh3B2j83VPH8hYnnkrO8wo6qsh6O6CdfQZgyi/7RbYSzlLAgnu1ci4G22mkct4HAPYAGryXmvi8tjCLGLALTrAyxgVcr6z7ntUhd3HgT1HkwJi0GgxI+wlcD6x705ZXoawNJb9H6yizaB9Y+Rc000hllnNSQ3UW7JFd0k8jdaiSAuXsxeCEX+OCbIcy4sS3DCojH8a6VcWBoOS8VJYGymaCdM0+jPWHlwOcbEsA0lpNpyY2PJs7U1CM7Lg+0Q5g6DhVd23d5TFi9DuLOcn5hncy0hcM7MyelwOeTgbMu6CbRirhucyJNc+zNFJN+3fPFY1IQUm0Bxbb1kTqDKNZGOshC3BxSWclB6y2yqk8D2OdFMi1WBM2+gXviHcNBFS6LumQKYuyw/uiqNtFs8B3FI+sIhMlXWf61eWNYDqMEWHphft5UfQC3xQY2gN2gdCehLEekJkvI8goa9IZfLjalxT7MrC0IhCaTeuZqXhGednodeHLQIufYBLG+s3aCxtbTz1n8J4DHEYoePtv+pfs/X+ARhKmImFuN1w/8MB1APADgUq5n1GeHmcAAAAASUVORK5CYII=\" width=\"24px\" >";
            uibox_config.appendChild(ui_config_visible);

            if(view.DemoType === 1)
            {
                let uibox_custom = document.createElement('div');
                uibox_custom.id = view.GetViewID() + "uibox" + uiBoxNum; uiBoxNum++;
                uibox_custom.className = "uibox";
                divToolbar.appendChild(uibox_custom);

                let ui_player = document.createElement('div');
                ui_player.id = view.GetViewID() + "ui_player";
                ui_player.className = "uitxt uialone_line";
                ui_player.innerHTML = "<img id=\""+ view.GetViewID() + "ui_player_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAy0lEQVRYhWMYBaNgxANGWABodU/8T8/AuFaaD7abCYvcBpAkVMEBGonBATYHXERiH6SRGF4H6DNAokQAxqaBGBwMeBqAA3o6ANkuFgoM2MDAwFB4rTT/ASWOwZYGiAUBDAwM97W6JzZA45fuDoCBegYGhvNa3RMTBsoBIKDAwMAwX6t74n5SQ4NaDiAbkJUIsQBQQmy8Vpq/gFSN1HBAIwMDw4RrpfkfyNFMiQOokg3JcgBGKUYtB9C7OAaB0ep4tDoeBaNghAMGBgYArmmC/D6ZC2wAAAAASUVORK5CYII=\" width=\"32px\" >";
                uibox_custom.appendChild(ui_player);

                // Player
                if ($('#' + view.GetViewID() + 'ui_player').length > 0) {
                    $('#' + view.GetViewID() + 'ui_player').attr('data-tooltip-text', 'Player');

                    $('#' + view.GetViewID() + 'ui_player').bind("contextmenu", function (e) {
                        e.preventDefault();
                    });
                    $("#" + view.GetViewID() + "ui_player").click(function () {
                        view.Player.Show(!view.Player.Visible);
                        if (view.Player.Visible) {
                            $("#" + view.GetViewID() + "ui_player_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAqUlEQVRYhe2V0Q3CMAxEbcQAHYENWIlRuhHdoGUEJmCUqwpxmooIRYmcCMXvy3Ik++RzEjKM7mEZAADUHAYzv3ufImcTO4hoUcp5YgKeQfxQyv0UcKWPJYPECrndCgla7YCnpoCwV8yCpAIA7gAuKqoSBQij87esV4GAjReAW0sBwpwyjeIdUOGfLWi2hNnXMOx1zinw9YoVcBBQ+znesO/YvmPD6BwiWgHmkRAO0iIfJwAAAABJRU5ErkJggg==");
                            $("#" + view.GetViewID() + "ui_player").addClass('clck');
                        }
                        else {
                            $("#" + view.GetViewID() + "ui_player_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAy0lEQVRYhWMYBaNgxANGWABodU/8T8/AuFaaD7abCYvcBpAkVMEBGonBATYHXERiH6SRGF4H6DNAokQAxqaBGBwMeBqAA3o6ANkuFgoM2MDAwFB4rTT/ASWOwZYGiAUBDAwM97W6JzZA45fuDoCBegYGhvNa3RMTBsoBIKDAwMAwX6t74n5SQ4NaDiAbkJUIsQBQQmy8Vpq/gFSN1HBAIwMDw4RrpfkfyNFMiQOokg3JcgBGKUYtB9C7OAaB0ep4tDoeBaNghAMGBgYArmmC/D6ZC2wAAAAASUVORK5CYII=");
                            $("#" + view.GetViewID() + "ui_player").removeClass('clck');
                        }
                    });
                }
            }
            
            //document.appendChild(divToolbar);
            if ($('#' + view.GetViewID() + 'ui_tree_visible').length > 0) {
                $('#' + view.GetViewID() + 'ui_tree_visible').attr('data-tooltip-text', 'Structure');

                $('#' + view.GetViewID() + 'ui_tree_visible').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_tree_visible").click(function () {
                    //view.Data.ShowSelection(false);
                    view.Tree.Show(!view.Tree.Visible);
                    if (view.Tree.Visible) {
                        $("#" + view.GetViewID() + "ui_tree_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVRYhe2W/QmDMBDF70oHyQiO4AiO4AZ1BEfoBuIEruAI3aAjOMIrBycESWJjY/9o7wdByH28Z5RwZBg5AHDY4fQDRUIkFYtxOcOkGTADOVyPFB35238DAC2ACcASuI4WjbXFXxZAA+CpQiLSAagBDLpq3Zs0R3KbUuKDNpWn28R6WZs959d8Kt5ro+Cxhgx4sVZrg/F3xCtt0O0YjAroZxGqWE7qHrgR0czM9xzjPlo7a69sA3Ls41Fxj1F7ZRsQHgUMlOjxRWLzzuogNRXl5KzwdiN2zzMzl84RbB4wA8afQ0QvMjtEploo/DAAAAAASUVORK5CYII=");
                        $("#" + view.GetViewID() + "ui_tree_visible").addClass('clck');
                    }
                    else {
                        $("#" + view.GetViewID() + "ui_tree_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVRYhe2WwU0DMRBFH4gCKIGzT+kAOoAOyFZg7cFnwtkH4gpCOggdkA44+UrogA5AI7ySFbTWzm4ikOJ/XI+/39jjWVN18jrTbIDx4Qp4L8VEZ1WeahkfvgqAvWN9Oj8qbQWoAAN0MWbSmGr/t9I2ojlwC9wAl3vDn8Ar8BKdfR7qOQjA+HAHPAHSCTfAFngD7lPIGpgB14DE7oA2OruZDGB8WAGSuWT1GJ3dZWMLftrvIvsmkA/dnOhsU/IvFmFaQIyaoduaABvjg+zSyvjwkQPuq/caGh9mKZNWc6YZiMxpxSN56QAAK0UVnV1qF88glqkw7RiAeSquqVonLzUAqdKn6hAex9Ova9jXZruXTulVpInppP4Z5X1gSsxogEOrAvw5QNWJC/gGzxpfJC2uLCoAAAAASUVORK5CYII=");
                        $("#" + view.GetViewID() + "ui_tree_visible").removeClass('clck');
                    }
                });
            }

            if ($('#' + view.GetViewID() + 'ui_property_visible').length > 0) {
                $('#' + view.GetViewID() + 'ui_property_visible').attr('data-tooltip-text', 'Property');

                $('#' + view.GetViewID() + 'ui_property_visible').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_property_visible").click(function () {
                    //view.Data.ShowSelection(false);
                    view.Property.Show(!view.Property.Visible);
                    if (view.Property.Visible) {
                        $("#" + view.GetViewID() + "ui_property_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA7klEQVRYhe2W/Q2CQAzFW+MAjsAojMAGMoqb4AaOIBvgCI7gBs9ccibnUbhSwQvJvX9p3/3ach9UVCQJQANgwHpyXo2q2QAuftmbB6msU3K5AGoAnffsUgm1D2zX/jWcp/ee7gSAu6tcYVaFw1kA4ToxzAXME45jlwLUcfxBiHtpDQ16xikSwGZi5rwAkgpAdoCjNZGZeQ2AfY7gh5NwdK9IAKeUkbSflUoC9ER0Nppr5Lwfk3HZb0PK/R4IEi0vojbIr6Jv+heRsdJWgFDvjk0gtADmkzAWM1/9mt2/i/9S0Il8FB+IbABF+xERvQHiNpsnL75mcAAAAABJRU5ErkJggg==");
                        $("#" + view.GetViewID() + "ui_property_visible").addClass('clck');
                    }
                    else {
                        $("#" + view.GetViewID() + "ui_property_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABOElEQVRYhe2WzRHCIBCFn44FWIJnTrGDlKAVqBVw4qyeOVFBtAM70BI8cdUS0kGcnSGZBDFEEv/GvBkOIWH5eJBd0OvvNXAZwKSaAVgDiDoy6AxgqwU/2C/uAJhUGzM5fbynwVrwa8isTKoJAGoLAEsAOy346iEAkyoGcASw0oLvQiatgSGABMC87IQNQJOnWvC5Jxit6pI/a8GdW+kYRwCRFnya9w2tb2Jje61Ct8TErpwrG4CUBgZvojtwF8DL5HLurQAu9QAfBxiFDmz67/v0mw60yIQTu8/lwNgXqEUm9AKcTOV6lRamNBeyt2BL1ZAql68aPnsITTWkVil033UfKA0MuREVdwj7kNbdiDoR2cukyozN+SKyJrE7yQNm5WRtUoZ4G0AbiE4zYRniIwAWRK9efgG4AW1FdlsYEZgqAAAAAElFTkSuQmCC");
                        $("#" + view.GetViewID() + "ui_property_visible").removeClass('clck');
                    }
                });
            }

            // 선택모델 숨기기
            if ($('#' + view.GetViewID() + 'ui_hide').length > 0) {
                $('#' + view.GetViewID() + 'ui_hide').attr('data-tooltip-text', 'Hide Selection');
                $('#' + view.GetViewID() + 'ui_hide').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_hide").click(function () {
                    view.Data.ShowSelection(false);
                });
            }
            // 전체 보이기
            if ($('#' + view.GetViewID() + 'ui_show_all').length > 0) {
                $('#' + view.GetViewID() + 'ui_show_all').attr('data-tooltip-text', 'Show All');
                $('#' + view.GetViewID() + 'ui_show_all').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_show_all").click(function () {
                    view.Data.ShowAll(true);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_edge').length > 0) {
                $('#' + view.GetViewID() + 'ui_edge').attr('data-tooltip-text', 'Show Edge');
                if (view.Renderer.GetUseEdgeEffect()) {
                    $("#" + view.GetViewID() + "ui_edge").addClass('clck');
                    $("#" + view.GetViewID() + "ui_edge_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAv0lEQVRYhWMYBaOAWPD///+E/1QA6NaxEGM/yHIGBob5X37/Yfjx9y/JkcbBzMzAw4rdKiZ6Wb7l8TPSHUBNyy+/+0CaA+hhOU4H0MtyrA6gp+UggC1pzgcRIENwpVxCgFjLcTmAYcPDJ2RZDAIB8jJEWw4CBLMhrcGoA0YdMOoAujlAV0hg4BwAstxHVgrETKS7A5AtZ2RkXEBXBxCynKYOIMZymjmAWMtp5gBiLccKqNH0hjZqRsEoIAwYGBgA8jv3i/enDYsAAAAASUVORK5CYII=");
                }

                $('#' + view.GetViewID() + 'ui_edge').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_edge").click(function () {
                    if (view.Renderer.GetUseEdgeEffect()) {
                        view.Mode.Edge(false);
                        $("#" + view.GetViewID() + "ui_edge").removeClass('clck');
                        $("#" + view.GetViewID() + "ui_edge_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAxUlEQVRYhWMYBSMeMBIbAFrdExMYGBjmUxpg10rzUexkIcXyCic7Bg91VZIt3XHzNkPHvkNY5ZjoZbmprAzpDqCm5QqCAqQ5gB6W43QAvSzH6gB6Wg4C2HIBOKuBDMGVcgkBYi3H5QCGBjcnsiwG6921j2jLQYBgNqQ1GHXAqANGHUA3Bzx4/2HgHACy/PTjJyBmIt0dgGz5tdL8BXR1ACHLaeoAYiynmQOItZxmDiDWchDAXh3v2kepG4iyfBSMAgYGBgYANjF0QJ/SUbQAAAAASUVORK5CYII=");
                    }
                    else {
                        view.Mode.Edge(true);
                        $("#" + view.GetViewID() + "ui_edge").addClass('clck');
                        $("#" + view.GetViewID() + "ui_edge_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAv0lEQVRYhWMYBaOAWPD///+E/1QA6NaxEGM/yHIGBob5X37/Yfjx9y/JkcbBzMzAw4rdKiZ6Wb7l8TPSHUBNyy+/+0CaA+hhOU4H0MtyrA6gp+UggC1pzgcRIENwpVxCgFjLcTmAYcPDJ2RZDAIB8jJEWw4CBLMhrcGoA0YdMOoAujlAV0hg4BwAstxHVgrETKS7A5AtZ2RkXEBXBxCynKYOIMZymjmAWMtp5gBiLccKqNH0hjZqRsEoIAwYGBgA8jv3i/enDYsAAAAASUVORK5CYII=");
                    }

                });
            }

            // Rendering
            if ($('#' + view.GetViewID() + 'ui_rendermode_smooth').length > 0) {
                $('#' + view.GetViewID() + 'ui_rendermode_smooth').attr('data-tooltip-text', 'Smooth');
                $('#' + view.GetViewID() + 'ui_rendermode_smooth').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_rendermode_smooth").click(function () {
                    view.Mode.Xray(false);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_rendermode_xray').length > 0) {
                $('#' + view.GetViewID() + 'ui_rendermode_xray').attr('data-tooltip-text', 'Xray');
                $('#' + view.GetViewID() + 'ui_rendermode_xray').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_rendermode_xray").click(function () {
                    view.Mode.Xray(true);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_projection').length > 0) {
                $('#' + view.GetViewID() + 'ui_projection').attr('data-tooltip-text', 'Projection');
                if (view.Camera.perspectiveView) {
                    $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACNElEQVRYhe1WsVErMRB9ZijAVMCRKjp3YFeAXQGmAtmBYuNYwaEKbCqADgwVmEgppgN3ALMz70AIne4wzPwfeCN7Trvv6e3bvcMxjvGvo/fX+Mq6MYBLAFMAewBzb/S66fyfEFDWlQCuAAh4AeARwBOAcxJ5JpHHOPfkF6B9Zd1MWbcFsCX4HYALb/SIx17lP5XYKOvu4zqnBwCPg9tK4QcA197o54aUPdUomfNzApRYs0A/AG3sLdtQUh3JcQAWnQko6woCavZVbrgUcG/0roXwEEBFAmv2f6+syxOQvhJUJB5SPilwl5E4Jr2g8USBOW8vZK5TObECL4HEE2/0QxtoQHxG8F2Yy/ZVyrppKjeegj5vXfJ3F/Ap+yytWnqjL0LiVG7C5/s2BcCxEclWyrorFv02v+zzgq366HPinFymHr9R/LwXHX7zRvdyAJS7CvqcJBioU7EtoxTBRgJRkUXgjXr+l7kxVNbdMG/tjU4aUKJ1DwiIsm7H/T7jKN6mboNPQ9YKte2KdgKybllwIAS80TeZswK+4d4YNbWmEwFl3YpSy34fiJuVdTmiJcHrfrfujSQBmg8cxWXHBSRyr2jKSVN7OhHgLc680YMuBZR1Fb2RNVtTxIuoXiD3lDQH3OfrdUaz/Rhc4gsBb/SEy0LMtBUf0FgxeEGlhvRH1um5aPwiCpYI6IVb2ROchk2w87NvxoMJIP2SKfio/h7obLaDCARECqox5hKa/xb4GMf4PwLAOyge+ydtKTfqAAAAAElFTkSuQmCC");
                }
                else {
                    $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACMUlEQVRYhe1Wu3HCQBB9eFyAShDpRXYFhgoMFRhVcBAotokvgKsAOjCuADqwI6XIHdCBPTvzznMjDrTyJzI7Q8DB7T6993ZXuMS/j95vEWCczwBMAByq0q61934FgHF+CuARQMajNwCzqrS7PwVgnB8AWAHIAcwB3LO4fJffNgRSn8px9c3CuXF+C2DLgv2qtE9CP4D3qrRDAGMANwD2xvknSnQUnRhgEqF6mqLZOD+S8/iJpTgAy6+zpj/UDFDnPY1WVKW9TWhs+ftXkJmC/lg1814rCsc6L0XrqrQHJeicjAmoHX2hA8DLCwAjXh6eMxPDiwSUakpGBOy4Ku3GOP/RCiC6LMhrFm5tJ0bQOiflnhKcjBQDe14WwyyVhYNUOT9r3m+VKmXC0C4PTNpWWFpyxZas6ZNRSm8tAIk+tdsa55/ph2bhjC32ymJj9v+cXpD/TNoe4mgOiFGq0vaQnnRLoZX9vgg6h/NErgX9JIOqjnOrAERnwZTgABpQ53lbZ5C9jEyhmVs1iGjGHRPl7IxC0Zbgf4IMRyxpBlEYuxlBQNuWKQk7AaC7Rxy9Q5ruTlE4Z+GwEU8OsSQAbjrZZLcanaN78bJSDbFTDIS2UhVm8Qk7A12GWMqEBc2yIuVthQfG+VdSvmbLqSfoEQOyr43zm7APjPMPfKJNo3BzWfW7MBbi7AtJokhNb7xEy6rosKy6AYiADAjkhkcHmlNN9Y8AREAmnAdr7UvJJS5xNgB8Als2DTWyGh0QAAAAAElFTkSuQmCC");
                }
                $('#' + view.GetViewID() + 'ui_projection').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_projection").click(function () {
                    view.Camera.SetPerspectiveView(!view.Camera.perspectiveView);
                    if (view.Camera.perspectiveView) {
                        $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACNElEQVRYhe1WsVErMRB9ZijAVMCRKjp3YFeAXQGmAtmBYuNYwaEKbCqADgwVmEgppgN3ALMz70AIne4wzPwfeCN7Trvv6e3bvcMxjvGvo/fX+Mq6MYBLAFMAewBzb/S66fyfEFDWlQCuAAh4AeARwBOAcxJ5JpHHOPfkF6B9Zd1MWbcFsCX4HYALb/SIx17lP5XYKOvu4zqnBwCPg9tK4QcA197o54aUPdUomfNzApRYs0A/AG3sLdtQUh3JcQAWnQko6woCavZVbrgUcG/0roXwEEBFAmv2f6+syxOQvhJUJB5SPilwl5E4Jr2g8USBOW8vZK5TObECL4HEE2/0QxtoQHxG8F2Yy/ZVyrppKjeegj5vXfJ3F/Ap+yytWnqjL0LiVG7C5/s2BcCxEclWyrorFv02v+zzgq366HPinFymHr9R/LwXHX7zRvdyAJS7CvqcJBioU7EtoxTBRgJRkUXgjXr+l7kxVNbdMG/tjU4aUKJ1DwiIsm7H/T7jKN6mboNPQ9YKte2KdgKybllwIAS80TeZswK+4d4YNbWmEwFl3YpSy34fiJuVdTmiJcHrfrfujSQBmg8cxWXHBSRyr2jKSVN7OhHgLc680YMuBZR1Fb2RNVtTxIuoXiD3lDQH3OfrdUaz/Rhc4gsBb/SEy0LMtBUf0FgxeEGlhvRH1um5aPwiCpYI6IVb2ROchk2w87NvxoMJIP2SKfio/h7obLaDCARECqox5hKa/xb4GMf4PwLAOyge+ydtKTfqAAAAAElFTkSuQmCC");
                    }
                    else {
                        if (view.Control.GetMode() === VIZCore.Enum.CONTROL_STATE.WALKTHROUGH) {
                            view.Control.SetMode(VIZCore.Enum.CONTROL_STATE.NORMAL);
                            $("#" + view.GetViewID() + "ui_walkthrough").removeClass('clck');
                        }

                        $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACMUlEQVRYhe1Wu3HCQBB9eFyAShDpRXYFhgoMFRhVcBAotokvgKsAOjCuADqwI6XIHdCBPTvzznMjDrTyJzI7Q8DB7T6993ZXuMS/j95vEWCczwBMAByq0q61934FgHF+CuARQMajNwCzqrS7PwVgnB8AWAHIAcwB3LO4fJffNgRSn8px9c3CuXF+C2DLgv2qtE9CP4D3qrRDAGMANwD2xvknSnQUnRhgEqF6mqLZOD+S8/iJpTgAy6+zpj/UDFDnPY1WVKW9TWhs+ftXkJmC/lg1814rCsc6L0XrqrQHJeicjAmoHX2hA8DLCwAjXh6eMxPDiwSUakpGBOy4Ku3GOP/RCiC6LMhrFm5tJ0bQOiflnhKcjBQDe14WwyyVhYNUOT9r3m+VKmXC0C4PTNpWWFpyxZas6ZNRSm8tAIk+tdsa55/ph2bhjC32ymJj9v+cXpD/TNoe4mgOiFGq0vaQnnRLoZX9vgg6h/NErgX9JIOqjnOrAERnwZTgABpQ53lbZ5C9jEyhmVs1iGjGHRPl7IxC0Zbgf4IMRyxpBlEYuxlBQNuWKQk7AaC7Rxy9Q5ruTlE4Z+GwEU8OsSQAbjrZZLcanaN78bJSDbFTDIS2UhVm8Qk7A12GWMqEBc2yIuVthQfG+VdSvmbLqSfoEQOyr43zm7APjPMPfKJNo3BzWfW7MBbi7AtJokhNb7xEy6rosKy6AYiADAjkhkcHmlNN9Y8AREAmnAdr7UvJJS5xNgB8Als2DTWyGh0QAAAAAElFTkSuQmCC");
                    }
                });
            }

            if ($('#' + view.GetViewID() + 'ui_walkthrough').length > 0) {
                $('#' + view.GetViewID() + 'ui_walkthrough').attr('data-tooltip-text', 'Walkthrough');
                $('#' + view.GetViewID() + 'ui_walkthrough').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_walkthrough").click(function () {
                    //clck

                    let mode = view.Control.GetMode();

                    if (mode !== VIZCore.Enum.CONTROL_STATE.WALKTHROUGH) {
                        // 원근 뷰 교체 후 워크쓰루 모드 설정
                        if (!view.Camera.perspectiveView) {
                            view.Camera.perspectiveView = true;
                            view.Camera.ResizeGLWindow();

                            $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACNElEQVRYhe1WsVErMRB9ZijAVMCRKjp3YFeAXQGmAtmBYuNYwaEKbCqADgwVmEgppgN3ALMz70AIne4wzPwfeCN7Trvv6e3bvcMxjvGvo/fX+Mq6MYBLAFMAewBzb/S66fyfEFDWlQCuAAh4AeARwBOAcxJ5JpHHOPfkF6B9Zd1MWbcFsCX4HYALb/SIx17lP5XYKOvu4zqnBwCPg9tK4QcA197o54aUPdUomfNzApRYs0A/AG3sLdtQUh3JcQAWnQko6woCavZVbrgUcG/0roXwEEBFAmv2f6+syxOQvhJUJB5SPilwl5E4Jr2g8USBOW8vZK5TObECL4HEE2/0QxtoQHxG8F2Yy/ZVyrppKjeegj5vXfJ3F/Ap+yytWnqjL0LiVG7C5/s2BcCxEclWyrorFv02v+zzgq366HPinFymHr9R/LwXHX7zRvdyAJS7CvqcJBioU7EtoxTBRgJRkUXgjXr+l7kxVNbdMG/tjU4aUKJ1DwiIsm7H/T7jKN6mboNPQ9YKte2KdgKybllwIAS80TeZswK+4d4YNbWmEwFl3YpSy34fiJuVdTmiJcHrfrfujSQBmg8cxWXHBSRyr2jKSVN7OhHgLc680YMuBZR1Fb2RNVtTxIuoXiD3lDQH3OfrdUaz/Rhc4gsBb/SEy0LMtBUf0FgxeEGlhvRH1um5aPwiCpYI6IVb2ROchk2w87NvxoMJIP2SKfio/h7obLaDCARECqox5hKa/xb4GMf4PwLAOyge+ydtKTfqAAAAAElFTkSuQmCC");
                        }
                        view.Control.SetMode(VIZCore.Enum.CONTROL_STATE.WALKTHROUGH);
                        $("#" + view.GetViewID() + "ui_walkthrough").addClass('clck');

                        $("#" + view.GetViewID() + "ui_walkthrough_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVRYhe2W4W3CMBCF7zoBI9AN2ABG6AhsUEbIBlEn6Ah0A+gEYYOwQbrBq0wdKTL3LsRJ6J88KUIxZ/uL751tWbSoTwBW/7JIAAoADf4UfvfPntzS+lkADQEop55LCQBI/FVVX9lgADYicvOMqp6zqcjXt7ozZWgDcEriqgiUBcBSELQz4plnmr4qeiHtXwOZt6Q9TH7IAfhw+liVcHXi3wcDqOpFRJiJLIBvZ46VlbZehU4kr5XVF0Dt+CavfA1ne5Xw5gCY0I8AbMiA5rYM4MgIsgDELrETy2ncD1gJD/dBZ+ASwCGcBfEJUJ8kFfvJAToDV8mgprmIIYuxAKYhHdhU7ob0CMDayG/txDdxJcrYd/zFJlZF6/TaO2za/+JqHEdVQiZska6YFcfOgim0be8GnuYE+EneLzPOda/ol+6lNu9ysmjRrBKRX2CmsN5CkHa3AAAAAElFTkSuQmCC");
                    }
                    else {
                        view.Control.SetMode(VIZCore.Enum.CONTROL_STATE.NORMAL);
                        $("#" + view.GetViewID() + "ui_walkthrough").removeClass('clck');
                        $("#" + view.GetViewID() + "ui_walkthrough_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABkklEQVRYhe1WwVHDMBBcGAowHZCvX+4gSQWECkgqEHnoDXn7QVQB6YB0QNJB+OgLHeAOYDRznvEod6cokAwP788nn299uycJPXqkUNauOGWTLqSFsnZPAAyAQKABMPfWrM5CgIo/MksDb83nXxK4FOImM340roRESfdJkEIqVtauanO9NZtDSEkSfCs5196aJno/FH0FMOqEdwBm3pqdRkCSoBHiARUTe4iKt++9paZIIrDWkhgMhXhB5LIJOCXnholpk6EalyVAukkm4ghslRpFWbtYHp0AYSHEb+MAbVBaF/ZykgRojLguVIKxxPFkDJomkPjoJA54a9aKebnJSRMgL8RSbJR2z6QRlnyQ6kAgEc6FJXVjQEVGZe1eYilog9KkyCdAH57Tn4Xd7oMOqil3YCmGPK4DHdwzWkqbDDdBrDQ5BDh9WS9QFxpaX5J07F3iYAJ0Dxh3nB6e75SUsbcmFH4H8Azgi3tJvBH9FtGNqv2JvXo5EuRiqNwrzkIg9gt7LzglgUWHREMm7tHjnwHAD2jlb7TznvRMAAAAAElFTkSuQmCC");
                    }

                    //view.Camera.SetPerspectiveView(!view.Camera.perspectiveView);
                    //if (view.Camera.perspectiveView) {
                    //    $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACIElEQVRYheVXvUoDQRD+9AnuDZJHyANEzCOkS5vKOm/gdbZ5AIvYWAmmtPPshUQEQbAQCxVEiI0/CH5yMgPDZi63exEsHFhu53Kz33ezM99tNkjiL23zT9F/mcAQwAeATwAzAIOoqHIL1hwdkgV9+yQ5IzmowlgHPCM5NrALkjnJPZI3JL8CSq8kj0l2f4PASADVpiTbznNKJrSrpgR6JOdmsbncq4trkTwMSCQRKN9uEqR7lLhdlvh5CoE8SPdEFmwC/i7XPIZAmdpbA1xIxadum2aufIlrmfdWEWhLUdl0DxsWqwXfMmtmHoFMUmNtnJhuD7y0vry1Fi48Ak8m4L6irZqAa/ZOxD+qIhBarYolgPfNvUEVAa3UR0fFlEy3AXjbdNEkjLGO6nlf/CRJrQC3LTj3SFtHdT13Htwn+eBsk5I5csDDLnBryjraAeMVKW6tIBOCD839Srm2jhZKEVlsSuZN4g7Nbx0D7mXUJeD2acRQtVSVzMy9aV28dTLDOha87cRoMd/GiJg9ki3MPIs8hnXkeibXHMA2gBcA/WBN18Iz4UWwcJ315PdC5rvijwDMYxYICSjj2AwogXsAU5kfAJhExi99DbWfF1LhdTWgdtmwgJcI7AR9/SVq6H0PtGue68QmhQBEYgvRf2uqeq1AuGrFJpWAHaOK70GphHexYrMOAR2qeq9cttOm4CkEwi2ayRYt1jgx/Yx//u8YwDfHJPB+vmSCFAAAAABJRU5ErkJggg==");
                    //}
                    //else {
                    //    $("#" + view.GetViewID() + "ui_projection_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAABhUlEQVRYhcWXzY3CQAyFzVaQDmiBAjhQAjeuOVAIN64UsAc6gApogRSQGwdWQiuttBIXJN4q0gwyw0zGdsjG0oj8jMef4jdjMwJAQ9rHoNE7AkyI6JuI7kRUE9HatEqTAsMokbYzgE8AY8m62uAFgC0LvQewBHAEcIsgXQHsAEzfATABULHFV5E5UxfwGoG5OdCFBWAO4Mct1PzOBD5jl4pzBOZXA7BhjpVLg0U3hwAiC1AEn3xjDBzqRgQwCz753Bg8ppssAJ9UuUUswVO6SQIUblt523bId5tukgAX9vLQId853SQBYqY51aS6yQJYTjWNbrIA/l5yqi0NuhED8NF2qnkrhToxAYRjDaBmPpqt+hSHd0T+YqSp5kqfpoc4cp//7IhKFvz0eGpMgcYn1kM8hNo3QLaH6BNA1EP0BSDuIWKL1W6bWQDUPQS/+cKr5WoBBzD1EOGDhbIWcHHxTy4+mNpeSmpBaOoeQjrxnbXABBAOXwvuLt/Wtu2pFgxiw/47JqI/Uf1aiMFmIFYAAAAASUVORK5CYII=");
                    //}
                });
            }


            if ($('#' + view.GetViewID() + 'ui_camera_plusx').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_plusx').attr('data-tooltip-text', 'Camera +X');
                $('#' + view.GetViewID() + 'ui_camera_plusx').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_plusx").click(function () {
                    view.Camera.ViewRightElevation();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_minusx').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_minusx').attr('data-tooltip-text', 'Camera -X');
                $('#' + view.GetViewID() + 'ui_camera_minusx').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_minusx").click(function () {
                    view.Camera.ViewLeftElevation();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_plusy').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_plusy').attr('data-tooltip-text', 'Camera +Y');
                $('#' + view.GetViewID() + 'ui_camera_plusy').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_plusy").click(function () {
                    view.Camera.ViewBackSection();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_minusy').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_minusy').attr('data-tooltip-text', 'Camera -Y');
                $('#' + view.GetViewID() + 'ui_camera_minusy').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_minusy").click(function () {
                    view.Camera.ViewFrontSection();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_plusz').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_plusz').attr('data-tooltip-text', 'Camera +Z');
                $('#' + view.GetViewID() + 'ui_camera_plusz').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_plusz").click(function () {
                    view.Camera.ViewTopPlan();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_minusz').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_minusz').attr('data-tooltip-text', 'Camera -Z');
                $('#' + view.GetViewID() + 'ui_camera_minusz').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_minusz").click(function () {
                    view.Camera.ViewBottomPlan();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_plusiso').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_plusiso').attr('data-tooltip-text', 'Camera +ISO');
                $('#' + view.GetViewID() + 'ui_camera_plusiso').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_plusiso").click(function () {
                    view.Camera.ViewISOPlus();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_camera_minusiso').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_minusiso').attr('data-tooltip-text', 'Camera -ISO');
                $('#' + view.GetViewID() + 'ui_camera_minusiso').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_minusiso").click(function () {
                    view.Camera.ViewISOMinus();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_clipping_yz').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping_yz').attr('data-tooltip-text', 'Section Plane X');
                $('#' + view.GetViewID() + 'ui_clipping_yz').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_clipping_yz").click(function () {
                    view.Clipping.CreateClipping(VIZCore.Enum.CLIPPING_MODES.X);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_clipping_zx').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping_zx').attr('data-tooltip-text', 'Section Plane Y');
                $('#' + view.GetViewID() + 'ui_clipping_zx').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_clipping_zx").click(function () {
                    view.Clipping.CreateClipping(VIZCore.Enum.CLIPPING_MODES.Y);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_clipping_xy').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping_xy').attr('data-tooltip-text', 'Section Plane Z');
                $('#' + view.GetViewID() + 'ui_clipping_xy').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_clipping_xy").click(function () {
                    view.Clipping.CreateClipping(VIZCore.Enum.CLIPPING_MODES.Z);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_clipping_box').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping_box').attr('data-tooltip-text', 'Section Box');
                $('#' + view.GetViewID() + 'ui_clipping_box').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_clipping_box").click(function () {
                    view.Clipping.CreateClipping(VIZCore.Enum.CLIPPING_MODES.BOX);
                });
            }



            if ($('#' + view.GetViewID() + 'ui_clipping_inverse').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping_inverse').attr('data-tooltip-text', 'Change Direction');
                $('#' + view.GetViewID() + 'ui_clipping_inverse').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_clipping_inverse").click(function () {
                    view.Clipping.Inverse();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_clipping_disable').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping_disable').attr('data-tooltip-text', 'Disable');
                $('#' + view.GetViewID() + 'ui_clipping_disable').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_clipping_disable").click(function () {
                    view.Clipping.Clear();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_measure_coordinate').length > 0) {
                $('#' + view.GetViewID() + 'ui_measure_coordinate').attr('data-tooltip-text', 'Coord.');
                $('#' + view.GetViewID() + 'ui_measure_coordinate').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_measure_coordinate").click(function () {
                    view.Review.AddPosition();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_measure_2posdistance').length > 0) {
                $('#' + view.GetViewID() + 'ui_measure_2posdistance').attr('data-tooltip-text', 'Distance');
                $('#' + view.GetViewID() + 'ui_measure_2posdistance').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_measure_2posdistance").click(function () {
                    view.Review.AddDistance();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_measure_angle').length > 0) {
                $('#' + view.GetViewID() + 'ui_measure_angle').attr('data-tooltip-text', 'Angle');
                $('#' + view.GetViewID() + 'ui_measure_angle').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_measure_angle").click(function () {
                    view.Review.AddAngle();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_note_surface').length > 0) {
                $('#' + view.GetViewID() + 'ui_note_surface').attr('data-tooltip-text', 'Surface Note');
                $('#' + view.GetViewID() + 'ui_note_surface').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_note_surface").click(function () {
                    scope.ReviewType = VIZCore.Enum.REVIEW_TYPES.RK_SURFACE_NOTE;
                    //view.Review.AddSurfaceNote();
                    initNoteWindow();
                    visibleNoteWindow(true);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_note_3d').length > 0) {
                $('#' + view.GetViewID() + 'ui_note_3d').attr('data-tooltip-text', '3D Note');
                $('#' + view.GetViewID() + 'ui_note_3d').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_note_3d").click(function () {
                    scope.ReviewType = VIZCore.Enum.REVIEW_TYPES.RK_3D_NOTE;
                    //view.Review.Add3DNote();
                    initNoteWindow();
                    visibleNoteWindow(true);
                });
            }

            if ($('#' + view.GetViewID() + 'ui_note_2d').length > 0) {
                $('#' + view.GetViewID() + 'ui_note_2d').attr('data-tooltip-text', '2D Note');
                $('#' + view.GetViewID() + 'ui_note_2d').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_note_2d").click(function () {
                    scope.ReviewType = VIZCore.Enum.REVIEW_TYPES.RK_2D_NOTE;
                    //view.Review.Add2DNote();
                    initNoteWindow();
                    visibleNoteWindow(true);
                });
            }





            if ($('#' + view.GetViewID() + 'ui_camera_fitall').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_fitall').attr('data-tooltip-text', 'Fit Screen');
                $('#' + view.GetViewID() + 'ui_camera_fitall').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_camera_fitall").click(function () {
                    //view.Camera.ResetGLWindow();
                    //view.Camera.ViewISOPlus();
                    //view.Camera.ResizeGLWindow();
                    view.Camera.ResetView();

                });
            }

            if ($('#' + view.GetViewID() + 'ui_rendermode').length > 0) {
                $('#' + view.GetViewID() + 'ui_rendermode').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
            }
            if ($('#' + view.GetViewID() + 'ui_camera_set').length > 0) {
                $('#' + view.GetViewID() + 'ui_camera_set').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
            }
            if ($('#' + view.GetViewID() + 'ui_clipping').length > 0) {
                $('#' + view.GetViewID() + 'ui_clipping').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
            }
            if ($('#' + view.GetViewID() + 'ui_measure').length > 0) {
                $('#' + view.GetViewID() + 'ui_measure').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
            }

            if ($('#' + view.GetViewID() + 'ui_config_visible').length > 0) {
                $('#' + view.GetViewID() + 'ui_config_visible').attr('data-tooltip-text', 'Configuration');

                $('#' + view.GetViewID() + 'ui_config_visible').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_config_visible").click(function () {
                    //view.Data.ShowSelection(false);
                    view.Config.Show(!view.Config.Visible);
                    if (view.Config.Visible) {
                        $("#" + view.GetViewID() + "ui_config_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABhUlEQVRYhe1V0W2DMBA9qg7gEegGbBBGoBOUERjBGzBC1AkYId2AEcgGYYOrkB7Kk/E1MSHKR3kSknU+/J7vzneyY8c9UNVGr2i2DNqbtaGqR1VtVTUXkQNtHSYb9o5PySDI78VDIqwIjAlnpPgukMWMCPtAprOIfGP9JSI57X1kWXZ+RERIPhVcR+EfVNXRvoNtRrdpYUby7iM+PnRay2e+gpfh5SkASR5EeEDYfUCuKFgW59EjpvUF/kWqgDahD7T0X2X4FJYIqwacYTd9QWD1hH76YgVtgltxUBNdrBUHN74gGjXWi2gl4dYwQoiZqKK9ejauIk+ImCMBJdm5Loa/T7lNkuPAHCnim/IA6xGVKojMQsB7ooYBhTZiHoyq+hPxK1B4jE/MlHQgvGVwG4aHT8U5D5/iKnJZ9v4eYrgwuRcU9BIc/FvupmsENHR7LrAetjryz/obRw5zROYl8vQ2IzMElEE+e1qfNh9GhogmyPuM55OTiALT7YR1t2mud/w/iMgvcIdQ3KkqyZgAAAAASUVORK5CYII=");
                        $("#" + view.GetViewID() + "ui_config_visible").addClass('clck');
                    }
                    else {
                        $("#" + view.GetViewID() + "ui_config_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAACD0lEQVRYhe1Wy23CQBQcotxxOoCrT1BBoIJABYQKFg4+E84+wFYAVABUgFMB5OIr7iAuIXpoVlotNlkDyiWMZGk/j/eZ91nwwL9HzYeAMNYjADNux2mk5vcirtSBMNYLADkATeM9Xm3ECQAKQJBGanh3B2j83VPH8hYnnkrO8wo6qsh6O6CdfQZgyi/7RbYSzlLAgnu1ci4G22mkct4HAPYAGryXmvi8tjCLGLALTrAyxgVcr6z7ntUhd3HgT1HkwJi0GgxI+wlcD6x705ZXoawNJb9H6yizaB9Y+Rc000hllnNSQ3UW7JFd0k8jdaiSAuXsxeCEX+OCbIcy4sS3DCojH8a6VcWBoOS8VJYGymaCdM0+jPWHlwOcbEsA0lpNpyY2PJs7U1CM7Lg+0Q5g6DhVd23d5TFi9DuLOcn5hncy0hcM7MyelwOeTgbMu6CbRirhucyJNc+zNFJN+3fPFY1IQUm0Bxbb1kTqDKNZGOshC3BxSWclB6y2yqk8D2OdFMi1WBM2+gXviHcNBFS6LumQKYuyw/uiqNtFs8B3FI+sIhMlXWf61eWNYDqMEWHphft5UfQC3xQY2gN2gdCehLEekJkvI8goa9IZfLjalxT7MrC0IhCaTeuZqXhGednodeHLQIufYBLG+s3aCxtbTz1n8J4DHEYoePtv+pfs/X+ARhKmImFuN1w/8MB1APADgUq5n1GeHmcAAAAASUVORK5CYII=");
                        $("#" + view.GetViewID() + "ui_config_visible").removeClass('clck');
                    }
                });
            }


            if ($('#' + view.GetViewID() + 'VIZCore_Toolbar_control').length > 0) {
                if (useToolbar) {
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar_control').show();
                }
                else {
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar_control').hide();
                }
            }

            if ($('#' + view.GetViewID() + 'VIZCore_Toolbar').length > 0) {

                if (scope.Visible) {
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar').show();
                }
                else {
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar').hide();
                }
            }
        }

        function initProgressBar() {
            let divProgressPage = document.createElement('div');
            divProgressPage.id = view.GetViewID() + "ProgressPage";
            divProgressPage.className = "ProgressPage";

            let divProgressBar = document.createElement('div');
            divProgressBar.className = "progress-bar";
            divProgressPage.appendChild(divProgressBar);

            let inactiveProgress = document.createElement('canvas');
            inactiveProgress.id = view.GetViewID() + "inactiveProgress";
            inactiveProgress.className = "progress-inactive";
            inactiveProgress.width = 200;
            inactiveProgress.height = 200;
            divProgressBar.appendChild(inactiveProgress);

            let activeProgress = document.createElement('canvas');
            activeProgress.id = view.GetViewID() + "activeProgress";
            activeProgress.className = "progress-active";
            activeProgress.width = 200;
            activeProgress.height = 200;
            divProgressBar.appendChild(activeProgress);

            let p = document.createElement('p');
            p.innerHTML = "0%";
            divProgressBar.appendChild(p);

            let pText = document.createElement('pText');
            divProgressBar.appendChild(pText);

            let pTextFile = document.createElement('pTextFile');
            divProgressBar.appendChild(pTextFile);

            //$('#' + view.GetViewID() + 'VIZCore').append(divProgressPage);
            view.Container.appendChild(divProgressPage);
            if (!view.ProgressEnable)
                $('.ProgressPage').hide();
        }
        function initSplitProgressBar() {
            //SplitProgressBar
            let divSplitProgressPage = document.createElement('div');
            divSplitProgressPage.id = view.GetViewID() + "SplitProgressPage";
            divSplitProgressPage.className = "SplitProgressPage";

            let divSplitProgressBar = document.createElement('div');
            divSplitProgressBar.id = view.GetViewID() + "splitProgress-bar";
            divSplitProgressBar.className = "splitProgress-bar";
            divSplitProgressPage.appendChild(divSplitProgressBar);

            let activeSplitProgress = document.createElement('canvas');
            activeSplitProgress.id = view.GetViewID() + "activeSplitProgress";
            activeSplitProgress.className = "splitProgress-active";
            activeSplitProgress.width = 80;
            activeSplitProgress.height = 80;
            divSplitProgressBar.appendChild(activeSplitProgress);

            view.Container.appendChild(divSplitProgressPage);
            if (!view.SplitProgressEnable)
                $('.SplitProgressPage').hide();
        }
        function initMessage() {
            let divMessage = document.createElement('div');
            divMessage.id = view.GetViewID() + "VIZCore_Message";
            divMessage.className = "ui_message";

            let divText = document.createElement('div');
            divText.className = "ui_message_text";
            divText.className = "ui_message_text";
            divMessage.appendChild(divText);

            let divText_p1 = document.createElement('div');
            divText_p1.className = "ui_message_text-p1";
            divText_p1.className = "ui_message_text-p1";
            divText.appendChild(divText_p1);

            view.Container.appendChild(divMessage);
            $('.ui_message').hide();
            //$('.ui_message').show();
            let ui_notice_img = document.createElement('div');
            ui_notice_img.id = view.GetViewID() + "ui_notice_img";
            ui_notice_img.style.display = "none";
            ui_notice_img.innerHTML += "<img id=\"ui_notice_img_warning\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAClklEQVR4nO1bC3HDMAxVhiAQOgaFUAiFUAiFUAYtg0IohEIIhIzBIGiXnZt6ipL4IytO5ne3u61xY+nZ1teDgoKCgoICXSDiHhEf+Eb3+/5fLAMiHnAc2ycBEdsJAtoMREwHRDwThffmx8Z5q8rXiPhtKXq1nl2tz7sx9bLSJsCUklPkbAIu25w7Hlsi4Gkp1kyMa6xxT10pEwERj2RlD2MzMS7yuHb9qdt7OIy3A6R1u0VEvJAV3Tl8Z0e+c9GRVhiMZe8VMc/u1rM78Qo2cet0i0TBlihob/OeBOt5TY7OfXSiHMEYsxMhhwUZcyJjRo1ndiBub+DOXAgAh/fkqvzsynkQMLmTsoPr2XUlAGZsSY4EUOvNuj1PAnZj3iQr+AjqQ4APsYvCJ4LzJQACIkpV+MbwgQQ45xRLEOCVxYUQAB5ZpSoYtzebx0cQQOsKy7pFJt53CllDCYChW1w2TwhNWiIJGE2yVMGkrc7V3BgCgC+f6btFYpC8ChexBMDQLermCYzb83JJQgREyRCFWPYlCIDIXRgMifMnSECwHQqCVANDigDQ7ipJ+WBhAoJikZCJxKIwSQIgMBoNmUQsDpcmAFJ3laQzMUKmiNBJu0rSubg5TvaKNRLbNklXKWU15nVBQvB9suWz1dTjLIgu2KoqsgZiXSWNmrwRVjyTE+kqpezKGMX/vF96d0XJn7ovl8INMnOE7WCNziyj/C8SzONvwzR684oE+JXPtG5nkJVJttPA95aK1v2cuRsiCeabj2SZbG/9N7QMmFxmGH0Sy59H10UQJPfoPcLHyBT1lu7rGl1YfSprUGcctn1d/Y3Pqqq+ur/6HWA+uC0vW3LcXsqzMLZg6p8a1oo2+ztGBQUFBQWaAIAfJq9d2o1Ek2kAAAAASUVORK5CYII=\" width=\"64px\" >";
            //ui_notice_img.innerHTML += "<img id=\"ui_notice_img_warning\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIZGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTUtMDgtMDVUMTk6MjE6NDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTEyLTMxVDA5OjMxOjM0KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEyLTMxVDA5OjMxOjM0KzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJkYjFjZTgzLWM1MDUtYjU0MS05YWE5LWM3MGU1MDljMmYzMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgwZWJlNGU2LTcxYTYtYjM0MC04YmViLTk1ZGEyNTRjMDNhYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM4N2FmNzA5LWU0NGYtNmQ0Yy1hNTViLTcxODljMWQ2MzM5ZiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIzMjAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI5NiI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPnhtcC5kaWQ6Mzg3YWY3MDktZTQ0Zi02ZDRjLWE1NWItNzE4OWMxZDYzMzlmPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mzg3YWY3MDktZTQ0Zi02ZDRjLWE1NWItNzE4OWMxZDYzMzlmIiBzdEV2dDp3aGVuPSIyMDE1LTA4LTA1VDE5OjIxOjQzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxZGE3MzllLTE0NGItMzI0NC04NGNhLTc5MmY4Y2JlY2I1OCIgc3RFdnQ6d2hlbj0iMjAyMC0xMi0wM1QxNjozMDowNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZGIxY2U4My1jNTA1LWI1NDEtOWFhOS1jNzBlNTA5YzJmMzAiIHN0RXZ0OndoZW49IjIwMjAtMTItMzFUMDk6MzE6MzQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ge+U5AAAAWUlEQVRIiWP8//8/Ay0BE01NH7VgZFjAgk9Su2cSPun/V0vyGAlZQK4PiM485FhAUs4k1QKSsz0pFpBVphBrAdkFFjEWUFQaErKA4qKWcbS4HrVg1ALaWwAAYM8RJIpsTCIAAAAASUVORK5CYII=\" width=\"64px\" >";
            divMessage.appendChild(ui_notice_img);
        }

        function initWaitLoading() {
            let divWaitPage = document.createElement('div');
            divWaitPage.id = view.GetViewID() + "WaitLoadingPage";
            divWaitPage.className = "WaitLoadingPage";

            let divWait = document.createElement('div');
            divWait.className = "waitLoading-bar";
            divWaitPage.appendChild(divWait);

            let activeWait = document.createElement('canvas');
            activeWait.id = view.GetViewID() + "activeWaitLoading";
            activeWait.className = "waitLoading-active";
            activeWait.width = 200;
            activeWait.height = 200;
            divWait.appendChild(activeWait);

            view.Container.appendChild(divWaitPage);
            //if (!view.ProgressEnable)
            $('.WaitLoadingPage').hide();
        }

        function initNote() {
            let divNote = document.createElement('div');
            divNote.id = view.GetViewID() + "div_note_container";
            divNote.className = "div_note_container";


            let div_title = document.createElement('div');
            div_title.id = view.GetViewID() + "div_note_header";
            div_title.className = "div_note_header";
            //div_title.innerHTML = "Note";
            divNote.appendChild(div_title);

            let div_header_text = document.createElement('div');
            div_header_text.id = view.GetViewID() + "ui_note_title";
            div_header_text.className = "ui_note_title";
            div_header_text.innerHTML = "Note";
            div_title.appendChild(div_header_text);

            let div_button_cancel = document.createElement('div');
            div_button_cancel.id = view.GetViewID() + "ui_note_button_cancel";
            div_button_cancel.className = "ui_button_note_cancel";
            div_button_cancel.innerHTML = "<img alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAi0lEQVRYhe2Wyw3AIAxDo07QUdh/qY6QqhKVeqCIECe+xBI38DP/SKk0kqqeT0Mtjsmvd756awB4e/2sAdQb4gPX5QCjgTsh3B4eA8QEto1g8B1DONxiHAZfAYTDZ6A0+CREHvwnhAt+4OMFi7oF1ENIvYbUh4j6FFM/I+p3TC1I6CUZvSgtlVIlIjcKY8/Xmh9j0wAAAABJRU5ErkJggg==\" width=\"18px\" >";
            div_title.appendChild(div_button_cancel);

            let div_text = document.createElement('div');
            div_text.id = view.GetViewID() + "div_note_text";
            //div_text.className = "ui_note_title";
            div_text.innerHTML = "<textarea id=\"" + view.GetViewID() + "ui_note_text\" name=\"review\" cols=\"25\" rows=\"8\" autofocus required wrap=\"hard\" placeholder=\"Text...\"></textarea>";
            divNote.appendChild(div_text);

            let div_button = document.createElement('div');
            div_button.id = view.GetViewID() + "div_note_button";
            div_button.className = "div_note_button";
            divNote.appendChild(div_button);

            let div_button_ok = document.createElement('div');
            div_button_ok.id = view.GetViewID() + "ui_note_button_ok";
            div_button_ok.className = "ui_button_small";
            div_button_ok.innerHTML = "OK";
            div_button.appendChild(div_button_ok);

            let div_button_select = document.createElement('div');
            div_button_select.id = view.GetViewID() + "ui_note_button_select";
            div_button_select.className = "ui_button_large";
            div_button_select.innerHTML = "Select Model";
            div_button.appendChild(div_button_select);

            view.Container.appendChild(divNote);

            $('#' + view.GetViewID() + 'ui_note_button_ok').click(function (e) {
                let text = $('#' + view.GetViewID() + 'ui_note_text').val();
                let arr = text.split('\n');
                // 텍스트 생성
                if (text.length === 0) {
                    alert("Please enter text.");
                    return;
                }

                text = arr;
                $('#' + view.GetViewID() + 'div_note_container').fadeOut(100);


                if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_2D_NOTE)
                    view.Review.Add2DNote(text);
                else if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_3D_NOTE)
                    view.Review.Add3DNote(text);
                else if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_SURFACE_NOTE) {
                    view.Review.AddSurfaceNote(text);
                }
            });

            $('#' + view.GetViewID() + 'ui_note_button_cancel').click(function (e) {
                visibleNoteWindow(false);
            });

            $('#' + view.GetViewID() + 'ui_note_button_select').click(function (e) {
                visibleNoteWindow(false);
                view.Renderer.Render();
                view.Review.AddSurfaceNote();
            });
        }

        function initNoteWindow() {
            $('#' + view.GetViewID() + 'ui_note_text').val("");
            if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_2D_NOTE)
                $('#' + view.GetViewID() + 'ui_note_title').html("2D Note");
            if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_3D_NOTE)
                $('#' + view.GetViewID() + 'ui_note_title').html("3D Note");
            if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_SURFACE_NOTE)
                $('#' + view.GetViewID() + 'ui_note_title').html("Surface Note");
        }

        function visibleNoteWindow(visible) {
            let popup = $("#" + view.GetViewID() + "div_note_container");
            if (popup.length > 0) {
                if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_2D_NOTE || scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_3D_NOTE) {
                    if (visible) {
                        $('#' + view.GetViewID() + 'ui_note_button_select').hide();
                        $('#' + view.GetViewID() + 'div_note_container').fadeIn(200);
                        $("#" + view.GetViewID() + "div_note_container").mouseover(function () {
                            //view.Lock(true);
                        }).mouseout(function () {
                            //view.Lock(false);
                        });
                    }
                    else {
                        $('#' + view.GetViewID() + 'div_note_container').fadeOut(200);
                        scope.ReviewType = VIZCore.Enum.REVIEW_TYPES.NONE;
                    }

                }
                else if (scope.ReviewType === VIZCore.Enum.REVIEW_TYPES.RK_SURFACE_NOTE) {
                    if (visible) {
                        $('#' + view.GetViewID() + 'ui_note_button_select').show();
                        $('#' + view.GetViewID() + 'div_note_container').fadeIn(200);
                        $("#" + view.GetViewID() + "div_note_container").mouseover(function () {
                            //view.Lock(true);
                        }).mouseout(function () {
                            //view.Lock(false);
                        });
                    }
                    else {
                        $('#' + view.GetViewID() + 'div_note_container').fadeOut(200);
                        scope.ReviewType = VIZCore.Enum.REVIEW_TYPES.NONE;
                    }

                }
            }
        }


        function initMessageBoxWindow() {
            let divMessageBox = document.createElement('div');
            divMessageBox.id = view.GetViewID() + "div_messagebox_container";
            divMessageBox.className = "div_messagebox_container";

            let div_title = document.createElement('div');
            div_title.id = view.GetViewID() + "div_messagebox_header";
            div_title.className = "div_messagebox_header";
            divMessageBox.appendChild(div_title);

            let div_header_text = document.createElement('div');
            div_header_text.id = view.GetViewID() + "ui_messagebox_title";
            div_header_text.className = "ui_messagebox_title";
            div_header_text.innerHTML = "Title";
            div_title.appendChild(div_header_text);

            let div_text = document.createElement('div');
            div_text.id = view.GetViewID() + "ui_messagebox_text";
            div_text.innerHTML = "description";
            //div_text.innerHTML = "<div style='color:red'>text</div>";
            div_text.style.height = "120px"; //div_messagebox_container 198px 기준
            div_text.style.padding = "5px";
            div_text.style.fontSize = "14px"; //16px 기본값

            divMessageBox.appendChild(div_text);

            let div_button = document.createElement('div');
            div_button.id = view.GetViewID() + "div_messagebox_button";
            div_button.className = "div_messagebox_button";
            divMessageBox.appendChild(div_button);

            let div_button_ok = document.createElement('div');
            div_button_ok.id = view.GetViewID() + "ui_messagebox_button_ok";
            div_button_ok.className = "ui_button_small";
            div_button_ok.innerHTML = "OK";
            div_button_ok.style.width = "50px";
            div_button.appendChild(div_button_ok);

            let div_button_cancel = document.createElement('div');
            div_button_cancel.id = view.GetViewID() + "ui_messagebox_button_cancel";
            div_button_cancel.className = "ui_button_small";
            div_button_cancel.innerHTML = "Cancel";
            div_button_cancel.style.width = "50px";
            div_button.appendChild(div_button_cancel);

            view.Container.appendChild(divMessageBox);
        }


        function initToolbarControl() {
            let uiWidth = 0;

            //let uiBoxNum = 1;
            //while ($('#' + view.GetViewID() + 'uibox' + uiBoxNum).length > 0) {
            //    uiWidth += $('#' + view.GetViewID() + 'uibox' + uiBoxNum).width();
            //    uiBoxNum++;
            //}
            uiWidth = 250;

            let divToolbarCtrl = document.createElement('div');
            divToolbarCtrl.id = view.GetViewID() + "VIZCore_Toolbar_control";
            divToolbarCtrl.className = "ui_controlcontainer";

            view.Container.appendChild(divToolbarCtrl);

            let uibox_toolbarCtrl = document.createElement('div');
            uibox_toolbarCtrl.id = view.GetViewID() + "uibox_ctrl";
            uibox_toolbarCtrl.className = "uibox_ctrl";
            divToolbarCtrl.appendChild(uibox_toolbarCtrl);

            let ui_toolbarHide = document.createElement('div');
            ui_toolbarHide.id = view.GetViewID() + "ui_toolbarHide";
            ui_toolbarHide.className = "uitxt uibottom";
            ui_toolbarHide.innerHTML = "";
            //ui_toolbarHide.innerHTML = "<img id=\"ui_toolbarHide_img\" alt = \"imgfile\" src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAByUlEQVRYhe2WvXECMRCFHx7npgScKqIEU4FxBT4qEBcoNsQKQBVwJeAKcAcmUnyuwHRgz3pWg0aW7kdc4jEvuztpv6fVanW46t9rFEuA0OYrNzFWyZHQZgpAAjBWyWPT+NumQDkGGH4AMAbwAaDRwE0OpCP8BGDfNmcwAxH4rC39pOQWeEFb9zIXTmrLAMELCs6QQeFdDBgOOo6ZuBTeaoCDzWImhoC3GmgwUQwB72QgYWIXwoU2k5wG1vkYBiYQrtwqWfeF9zIQmFhfknZfjX2gwURnMNfLLtXaexsIglMdLAE8A5jgfJGRwVfepg2ARSrGELchQSoGOj1yAyODC6tklZqcysC9W1FCtCrqA1uuhxc+lk77LnBS7ytXaLPj1f0EF9ps+LkEUHP7nvtwoc0nmbJK/tqKXqfAg8+8lVENrPl5EsJZTzSPzeYbYHhllXwL3h9dtcfSzuMrNnuRgS2v5CF4L3240GYutFm5jzy+4Pn5BqySJa/E3Qfggpv7cDZzh3MfOHDmyjBm7n+fq4V9pOBWDHenY8nwaC/IMoD4aZjy0YPXB0hlTh9ogxc+nF+/e0Nq/pnZWiVPiTD5ok7p1cBVf1gAvgHeGfOuPi6xAAAAAABJRU5ErkJggg==\" width=\"32px\" >";
            uibox_toolbarCtrl.appendChild(ui_toolbarHide);


            if ($('#' + view.GetViewID() + 'ui_toolbarHide').length > 0) {
                if (uiWidth > 0)
                    $('#' + view.GetViewID() + 'ui_toolbarHide').width(uiWidth);

                if (scope.Visible) {
                    $("#" + view.GetViewID() + "ui_toolbarHide").addClass('clck');
                }
                else {
                    $("#" + view.GetViewID() + "ui_toolbarHide").removeClass('clck');
                }

                $('#' + view.GetViewID() + 'ui_toolbarHide').bind("contextmenu", function (e) {
                    e.preventDefault();
                });
                $("#" + view.GetViewID() + "ui_toolbarHide").click(function () {
                    //view.Data.ShowSelection(false);
                    scope.Show(!scope.Visible);
                    if (scope.Visible) {
                        //$("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVRYhe2W/QmDMBDF70oHyQiO4AiO4AZ1BEfoBuIEruAI3aAjOMIrBycESWJjY/9o7wdByH28Z5RwZBg5AHDY4fQDRUIkFYtxOcOkGTADOVyPFB35238DAC2ACcASuI4WjbXFXxZAA+CpQiLSAagBDLpq3Zs0R3KbUuKDNpWn28R6WZs959d8Kt5ro+Cxhgx4sVZrg/F3xCtt0O0YjAroZxGqWE7qHrgR0czM9xzjPlo7a69sA3Ls41Fxj1F7ZRsQHgUMlOjxRWLzzuogNRXl5KzwdiN2zzMzl84RbB4wA8afQ0QvMjtEploo/DAAAAAASUVORK5CYII=");
                        $("#" + view.GetViewID() + "ui_toolbarHide").addClass('clck');
                    }
                    else {
                        //$("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVRYhe2WwU0DMRBFH4gCKIGzT+kAOoAOyFZg7cFnwtkH4gpCOggdkA44+UrogA5AI7ySFbTWzm4ikOJ/XI+/39jjWVN18jrTbIDx4Qp4L8VEZ1WeahkfvgqAvWN9Oj8qbQWoAAN0MWbSmGr/t9I2ojlwC9wAl3vDn8Ar8BKdfR7qOQjA+HAHPAHSCTfAFngD7lPIGpgB14DE7oA2OruZDGB8WAGSuWT1GJ3dZWMLftrvIvsmkA/dnOhsU/IvFmFaQIyaoduaABvjg+zSyvjwkQPuq/caGh9mKZNWc6YZiMxpxSN56QAAK0UVnV1qF88glqkw7RiAeSquqVonLzUAqdKn6hAex9Ova9jXZruXTulVpInppP4Z5X1gSsxogEOrAvw5QNWJC/gGzxpfJC2uLCoAAAAASUVORK5CYII=");
                        $("#" + view.GetViewID() + "ui_toolbarHide").removeClass('clck');
                    }
                });
            }


            if ($('#' + view.GetViewID() + 'VIZCore_Toolbar_control').length > 0) {
                if (!useToolbarControl)
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar_control').hide();
            }

        }


        this.InitViewContainer = function () {
            create();
        };

        this.Show = function (show) {

            scope.Visible = show;
            if ($('#' + view.GetViewID() + 'VIZCore_Toolbar').length > 0) {
                if (show) {
                    //$('#' + view.GetViewID() + 'VIZCore_Toolbar').show();
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar').fadeIn(200);
                }
                else {
                    //$('#' + view.GetViewID() + 'VIZCore_Toolbar').hide();
                    $('#' + view.GetViewID() + 'VIZCore_Toolbar').fadeOut(200);
                }
            }
        };

        this.ShowAnimation = function (show) {
            //transition animation
            scope.Visible = show;
            if ($('#' + view.GetViewID() + 'VIZCore_Toolbar_control').length > 0) {
                if (show) {

                    $("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbUlEQVRYR+2UT07CQBTGv9cCa7wBS21ccASO4BE4gWUSS+KqdmVCTYZ6ATkCR+AILEx1yRFcC+0zozQZakqnBcWYdjNp5s/7vW++bwgn/ujE9dEANAo0Cvw9BZwwYgYtbCTBsycWx3gnLkM5SGD7BB7EnrvT9DcF9MUKhDgR8Vgs64A4E9lnsqUqXNRU4RXoICCepWsOXm/FygTk/F72rDb5YBqWqVnqgYsHeUWwJBi9MhC9MAgrRipebsR8H3QpQLbZmTwOYbGvQAg8bbc4WArxpub7UnbXG/IZNFKFkVIQj69nJmoZA+yAEMvtf7Qd3c+RSZgWzs6rDJB1/L6xRgC+CgNRp5VOM0VMOi8E+OEY9mPPPdMB98YQTPM0SYSp+/OdHxzDlKwnE/fnCx81hrr7VQw7Nouiu87H0CQNxibUQLp50/1uDMPoTnf//4thlQwr6dX6Ovk/6CGqAlm21tiEZQfVnW8AGgUaBT4AwKvjIaTehw0AAAAASUVORK5CYII=");

                    let toolbarCtrl = document.getElementById('VIZCore_Toolbar_control');
                    toolbarCtrl.style.bottom = '80px';

                    //$('#' + view.GetViewID() + 'VIZCore_Toolbar').fadeIn(200, false);
                }
                else {
                    $("#" + view.GetViewID() + "ui_toolbarHide_img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZElEQVRYR+2UQU6DQBSG/wdt1/UGLJW46BE4gkfoCaSTSBNXyMqkmEzxAvYIPUKP0IVBlz2Ca1t4ZrQ1lJYykCiawBaG/5s/73uEhh9qOB8tQNtA28D/bGAgZf99Y4wAuNs9EvU66XQpxFvVvVK5ATuM7rLB28AvECYRj69nVSC0AezJ4xAG+2D0AezdWDWy3pDPoBEIK6QU6IKUAmSCLRDPeiaLoqrP76VldMkH01AXpBDgMpROSsYTGJ/B6ZqD11ux0qk3C8KghYkkePbE4tjZAwAVnMD0CeyAaZ4midANzgfYEzlgMqX6VxHIAYAdRlxGrdNC9pvMpQax555l35XOwLGwZjVUNhDLnf9NaGgReNrtcLCz4Uc1vHiQVwRD6tiQ15CRipcbMT81Myc1/LahKQ2VDcSJiMdiWXXy1fd/UUMn9ty91mtpWKcNdUbNSH6p/SqA1ique7u659oG2gbaBj4AvkjjIZUjHd4AAAAASUVORK5CYII=");

                    let toolbarCtrl = document.getElementById('VIZCore_Toolbar_control');
                    //toolbarCtrl.style.bottom = '0px';
                    toolbarCtrl.style.bottom = '-45px';
                    //$('#' + view.GetViewID() + 'VIZCore_Toolbar').fadeOut(200, false);
                }
            }
        };


        /**
        * 메세지 박스
        * @param {String} title : message Box Title
        * @param {String} description : message Box description
        * @param {function()} cbok : ok button callback function
        * @param {Number} messageType : 0 = ok and cancel, 1 = ok
        */
        this.ShowMessageBox = function (title, description, cbOK, messageType) {

            if (messageType < 0) {
                hideMessageBox();
                return;
            }

            if ($('#' + view.GetViewID() + 'div_messagebox_container').length > 0) {

                if (messageType === 0) {
                    $('#' + view.GetViewID() + 'ui_messagebox_button_cancel').show();
                }
                if (messageType === 1) {
                    $('#' + view.GetViewID() + 'ui_messagebox_button_cancel').hide();
                }

                if (title !== undefined) {
                    let preText = document.getElementById("ui_messagebox_title").innerHTML;
                    document.getElementById("ui_messagebox_title").innerHTML = title;
                }

                if (description !== undefined) {
                    let preText = document.getElementById("ui_messagebox_text").innerHTML;
                    document.getElementById("ui_messagebox_text").innerHTML = description;

                    //속성 추가방법
                    //let currentHTML = "<div style='color:red'>" + title + "</div>";
                    //document.getElementById("ui_messagebox_text").innerHTML = currentHTML;
                }


                $('#' + view.GetViewID() + 'ui_messagebox_button_ok').click(function (e) {
                    if (cbOK !== undefined)
                        cbOK();

                    //hideMessageBox();
                    $('#' + view.GetViewID() + 'div_messagebox_container').fadeOut(200);
                });

                $('#' + view.GetViewID() + 'ui_messagebox_button_cancel').click(function (e) {
                    //hideMessageBox();
                    $('#' + view.GetViewID() + 'div_messagebox_container').fadeOut(200);
                });


                //$('#' + view.GetViewID() + 'div_messagebox_container').show();
                $('#' + view.GetViewID() + 'div_messagebox_container').fadeIn(200);
            }
        };


    }
}

export default Toolbar;