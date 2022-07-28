class Configuration {
    constructor(VIZCore) {
        let scope = this;
        this.AUTHORITY_PARAMS = {
            Data: 'http://127.0.0.1:8901'
        };
        this.Render = {
            // 화면 조작시 가시화 정보 조정
            Progressive: {
                Enable: true,
                // Rendering Objects Count
                LimitCount: 2000
            },

            // Object Cache
            Cache: {
                Enable: false,
                // Triangles Count
                LimitCount: 50000000//150000000
            },

            // Loading Priority
            // LOD, DISTANCE, SHUFFLE(LOD + DISTANCE)
            //Priority: VIZCore.Enum.RENDER_PRIORITY.DISTANCE,
            //Priority: VIZCore.Enum.RENDER_PRIORITY.LOD,
            Priority: VIZCore.Enum.RENDER_PRIORITY.SHUFFLE,

            // Download Thread Count
            // DEFAULT (1), High-Performance(1 < Value)
            DownloadThreadCount: 1,

            // 좌표축
            CoordinateAxis : {
                Visible : true
            },

            Pivot : {
                Color : new VIZCore.Color(255, 0, 0, 255),
            }
        };

        this.Tree = {
            Use : true,
            Visible: false,
            Unit : VIZCore.Enum.VISIBLE_UNIT.Part
            //Unit: VIZCore.Enum.VISIBLE_UNIT.Body,
        };

        this.Toolbar = {
            Visible: true
        };

        this.Model = {
            Selection: {
                Color: new VIZCore.Color(255, 0, 0, 255),
                Width: 1.5,

                // Body, Part, Assembly, LEVEL
                //Unit: VIZCore.Enum.SELECT_UNIT.Body,
                Unit: VIZCore.Enum.SELECT_UNIT.Part,
                //Unit: VIZCore.Enum.SELECT_UNIT.Assembly,
                //Unit: VIZCore.Enum.SELECT_UNIT.Level,
                Level: 3,
                // All, Opacity-Object
                Kind: VIZCore.Enum.SelectionObject3DTypes.ALL,
                //Kind: VIZCore.Enum.SelectionObject3DTypes.OPAQUE_OBJECT3D,

                // shaded, Boundbox
                Mode: VIZCore.Enum.SelectionVisibleMode.SHADED
                //Mode: VIZCore.Enum.SelectionVisibleMode.BOUNDBOX
            },

        };

        this.Property = {
            Use : true,
            NavigateToParentNode: true, //Search parent node properties.
            UseArrayBuffer : true
        };

        this.Loader = {
            MeshLoadingTime: VIZCore.Enum.CONFIG_KEY.LOADER.MESHLOADINGTIME.STRUCTURE, // 완료 시점 이후 형상 로딩 HEADER, STRUCTURE, PROPERTY, MESH
            LoadingCompletedTime: VIZCore.Enum.CONFIG_KEY.LOADER.COMPLETEDTIME.MESH//VIZCore.Enum.CONFIG_KEY.LOADER.COMPLETEDTIME.MESH
        };

        this.Control = {
            // 마우스 이벤트의 카메라 화면 제어 잠금
            Lock : false, 
            // 회전 각도 %
            RotateFactor : 50,
            RotateScreenRate : true,    //카메라 회전 비율에 따른 속도활성화

            // Use auto fit when double-clicking the mouse
            UseAutoFit : false,

            Version : 1, // 0 : 기본, 1 : CUSTOM 1
            Fly : {
                MovementSpeed : 20.0, // Unit : M
                AroundSpeed : 45.0 // Unit : 각도
            }
        };

        this.Camera = {
            usePerspectiveScreenFit : false // 원근뷰 Fit All 기능시 화면 비율 적용
        };

        this.Event = {
            EnableCameraChanged : true, // 많이 발생하는 이벤트 제어
        };
    }
}

export default Configuration;