/**
 * Photoshop 文档创建代码解释
 * 
 * 本代码展示了如何使用 Photoshop API 的 batchPlay 方法创建两种不同类型的文档：
 * 1. 带画板的文档
 * 2. 普通文档
 */

async function actionTest() {
    let commands = [
        // 命令1: 创建带画板的文档
        {
            "_obj": "make",           // 操作类型：创建
            "documentID": 69,         // 文档唯一标识符
            "new": {
                "_obj": "document",   // 创建对象类型：文档
                "artboard": true,     // 启用画板功能
                "artboardList": [     // 画板配置列表
                    {
                        "_obj": "artboard",
                        "artboardRect": {  // 画板尺寸和位置
                            "_obj": "classFloatRect",
                            "bottom": 1200.0,  // 底部坐标
                            "left": 0.0,       // 左侧坐标
                            "right": 790.0,    // 右侧坐标
                            "top": 0.0         // 顶部坐标
                        }
                    }
                ],
                "autoPromoteBackgroundLayer": false,  // 不自动提升背景图层
                "depth": 8,           // 色彩深度：8位
                "fill": {             // 背景填充
                    "_enum": "fill",
                    "_value": "white" // 填充颜色：白色
                },
                "guides": [],         // 参考线：无
                "height": {           // 文档高度
                    "_unit": "distanceUnit",
                    "_value": 1200.0  // 1200像素
                },
                "mode": {             // 颜色模式
                    "_class": "RGBColorMode"  // RGB模式
                },
                "pixelScaleFactor": 1.0,      // 像素缩放因子
                "profile": "sRGB IEC61966-2.1", // 颜色配置文件
                "resolution": {       // 分辨率
                    "_unit": "densityUnit",
                    "_value": 72.0    // 72 DPI
                },
                "width": {            // 文档宽度
                    "_unit": "distanceUnit",
                    "_value": 790.0   // 790像素
                }
            }
        },
        
        // 命令2: 创建普通文档（不带画板）
        {
            "_obj": "make",           // 操作类型：创建
            "documentID": 72,         // 文档唯一标识符
            "new": {
                "_obj": "document",   // 创建对象类型：文档
                "artboard": false,    // 不启用画板功能
                "autoPromoteBackgroundLayer": false,  // 不自动提升背景图层
                "depth": 8,           // 色彩深度：8位
                "fill": {             // 背景填充
                    "_enum": "fill",
                    "_value": "white" // 填充颜色：白色
                },
                "guides": [],         // 参考线：无
                "height": {           // 文档高度
                    "_unit": "distanceUnit",
                    "_value": 1200.0  // 1200像素
                },
                "mode": {             // 颜色模式
                    "_class": "RGBColorMode"  // RGB模式
                },
                "pixelScaleFactor": 1.0,      // 像素缩放因子
                "profile": "sRGB IEC61966-2.1", // 颜色配置文件
                "resolution": {       // 分辨率
                    "_unit": "densityUnit",
                    "_value": 72.0    // 72 DPI
                },
                "width": {            // 文档宽度
                    "_unit": "distanceUnit",
                    "_value": 790.0   // 790像素
                }
            }
        }
    ];
    
    // 使用Photoshop API执行命令
    return await require("photoshop").action.batchPlay(commands, {});
}

// 在模态上下文中执行actionTest函数
console.log(
    await require("photoshop").core.executeAsModal(actionTest, {"commandName": "Action Commands"})
);

/**
 * 使用场景：
 * 1. 自动化创建标准尺寸的Photoshop文档
 * 2. 批量创建带画板或不带画板的文档
 * 3. 作为模板代码，根据需要修改参数创建自定义文档
 * 
 * 注意事项：
 * 1. 执行此代码需要在Photoshop环境中
 * 2. documentID应该是唯一的
 * 3. 尺寸、分辨率等参数可以根据需要调整
 */