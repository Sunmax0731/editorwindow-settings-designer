using UnityEditor;
using UnityEngine;

namespace Sunmax0731.EditorwindowSettingsDesigner
{
    public sealed class EditorwindowSettingsDesignerWindow : EditorWindow
    {
        [MenuItem("Tools/Sunmax0731/editorwindow-settings-designer")]
        public static void Open() => GetWindow<EditorwindowSettingsDesignerWindow>("editorwindow-settings-designer");

        private void OnGUI()
        {
            GUILayout.Label("EditorWindow・設定デザイナー", EditorStyles.boldLabel);
            GUILayout.Label("Closed alpha editor package is importable.");
        }
    }
}
