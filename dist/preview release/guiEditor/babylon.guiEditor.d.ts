/// <reference types="react" />
declare module GUIEDITOR {
    interface ILogComponentProps {
        globalState: GlobalState;
    }
    export class LogEntry {
        message: string;
        isError: boolean;
        constructor(message: string, isError: boolean);
    }
    export class LogComponent extends React.Component<ILogComponentProps, {
        logs: LogEntry[];
    }> {
        constructor(props: ILogComponentProps);
        componentDidMount(): void;
        componentDidUpdate(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export class Tools {
        static LookForItem(item: any, selectedEntity: any, firstIteration?: boolean): boolean;
        private static _RecursiveRemoveHiddenMeshesAndHoistChildren;
        static SortAndFilter(parent: any, items: any[]): any[];
        static getCellInfo(grid: Grid, control: Control): BABYLON.Vector2;
        static reorderGrid(grid: Grid, index: number, control: Control, cell: BABYLON.Vector2): void;
    }
}
declare module GUIEDITOR {
    export interface IWorkbenchComponentProps {
        globalState: GlobalState;
    }
    export type FramePortData = {};
    export const isFramePortData: (variableToCheck: any) => variableToCheck is FramePortData;
    export enum ConstraintDirection {
        NONE = 0,
        X = 2,
        Y = 3
    }
    export class WorkbenchComponent extends React.Component<IWorkbenchComponentProps> {
        artBoardBackground: Rectangle;
        private _rootContainer;
        private _setConstraintDirection;
        private _mouseStartPointX;
        private _mouseStartPointY;
        private _textureMesh;
        _scene: BABYLON.Scene;
        private _selectedGuiNodes;
        private _ctrlKeyIsPressed;
        private _altKeyIsPressed;
        private _constraintDirection;
        private _forcePanning;
        private _forceZooming;
        private _forceMoving;
        private _forceSelecting;
        private _outlines;
        private _panning;
        private _canvas;
        private _responsive;
        private _isOverGUINode;
        private _clipboard;
        private _selectAll;
        private _camera;
        private _cameraRadias;
        private _cameraMaxRadiasFactor;
        private _pasted;
        private _engine;
        get globalState(): GlobalState;
        get nodes(): Control[];
        get selectedGuiNodes(): Control[];
        constructor(props: IWorkbenchComponentProps);
        keyEvent: (evt: KeyboardEvent) => void;
        private updateHitTest;
        private updateHitTestForSelection;
        private setCameraRadius;
        private copyToClipboard;
        private pasteFromClipboard;
        CopyGUIControl(original: Control): void;
        private selectAllGUI;
        blurEvent: () => void;
        componentWillUnmount(): void;
        loadFromJson(serializationObject: any): void;
        loadFromSnippet(snippedId: string): Promise<void>;
        loadToEditor(): void;
        changeSelectionHighlight(value: boolean): void;
        resizeGuiTexture(newvalue: BABYLON.Vector2): void;
        findNodeFromGuiElement(guiControl: Control): Control;
        appendBlock(guiElement: Control): Control;
        isContainer(guiControl: Control): boolean;
        createNewGuiNode(guiControl: Control): Control;
        private parent;
        private _convertToPixels;
        private _reorderGrid;
        private _isNotChildInsert;
        private _adjustParentingIndex;
        isSelected(value: boolean, guiNode: Control): void;
        clicked: boolean;
        _onMove(guiControl: Control, evt: BABYLON.Vector2, startPos: BABYLON.Vector2, ignorClick?: boolean): boolean;
        componentDidMount(): void;
        onMove(evt: React.PointerEvent): void;
        getGroundPosition(): BABYLON.Nullable<BABYLON.Vector3>;
        onDown(evt: React.PointerEvent<HTMLElement>): void;
        isUp: boolean;
        onUp(evt: React.PointerEvent): void;
        createGUICanvas(): void;
        addControls(scene: BABYLON.Scene, camera: BABYLON.ArcRotateCamera): void;
        getPosition(scene: BABYLON.Scene, camera: BABYLON.ArcRotateCamera, plane: BABYLON.Plane): BABYLON.Vector3;
        panning(newPos: BABYLON.Vector3, initialPos: BABYLON.Vector3, inertia: number, ref: BABYLON.Vector3): BABYLON.Vector3;
        zoomWheel(p: BABYLON.PointerInfo, e: BABYLON.EventState, camera: BABYLON.ArcRotateCamera): number;
        zooming(delta: number, scene: BABYLON.Scene, camera: BABYLON.ArcRotateCamera, plane: BABYLON.Plane, ref: BABYLON.Vector3): void;
        zeroIfClose(vec: BABYLON.Vector3): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export class PropertyChangedEvent {
        object: any;
        property: string;
        value: any;
        initialValue: any;
        allowNullValue?: boolean;
    }
}
declare module GUIEDITOR {
    /**
     * Class used to provide lock mechanism
     */
    export class LockObject {
        /**
         * Gets or set if the lock is engaged
         */
        lock: boolean;
    }
}
declare module GUIEDITOR {
    export enum DragOverLocation {
        ABOVE = 0,
        BELOW = 1,
        CENTER = 2,
        NONE = 3
    }
    export class GlobalState {
        [x: string]: any;
        guiTexture: AdvancedDynamicTexture;
        hostElement: HTMLElement;
        hostDocument: HTMLDocument;
        hostWindow: Window;
        onSelectionChangedObservable: BABYLON.Observable<BABYLON.Nullable<Control>>;
        onResizeObservable: BABYLON.Observable<BABYLON.Vector2>;
        onBuiltObservable: BABYLON.Observable<void>;
        onResetRequiredObservable: BABYLON.Observable<void>;
        onUpdateRequiredObservable: BABYLON.Observable<void>;
        onLogRequiredObservable: BABYLON.Observable<LogEntry>;
        onErrorMessageDialogRequiredObservable: BABYLON.Observable<string>;
        onIsLoadingChanged: BABYLON.Observable<boolean>;
        onSelectionBoxMoved: BABYLON.Observable<ClientRect | DOMRect>;
        onNewSceneObservable: BABYLON.Observable<BABYLON.Nullable<BABYLON.Scene>>;
        onGuiNodeRemovalObservable: BABYLON.Observable<Control>;
        backgroundColor: BABYLON.Color4;
        blockKeyboardEvents: boolean;
        controlCamera: boolean;
        selectionLock: boolean;
        workbench: WorkbenchComponent;
        onPropertyChangedObservable: BABYLON.Observable<PropertyChangedEvent>;
        onZoomObservable: BABYLON.Observable<void>;
        onFitToWindowObservable: BABYLON.Observable<void>;
        onPanObservable: BABYLON.Observable<void>;
        onSelectionButtonObservable: BABYLON.Observable<void>;
        onMoveObservable: BABYLON.Observable<void>;
        onLoadObservable: BABYLON.Observable<File>;
        onSaveObservable: BABYLON.Observable<void>;
        onSnippetLoadObservable: BABYLON.Observable<void>;
        onSnippetSaveObservable: BABYLON.Observable<void>;
        onOutlinesObservable: BABYLON.Observable<void>;
        onResponsiveChangeObservable: BABYLON.Observable<boolean>;
        onParentingChangeObservable: BABYLON.Observable<BABYLON.Nullable<Control>>;
        onPropertyGridUpdateRequiredObservable: BABYLON.Observable<void>;
        onDraggingEndObservable: BABYLON.Observable<void>;
        onDraggingStartObservable: BABYLON.Observable<void>;
        onWindowResizeObservable: BABYLON.Observable<void>;
        draggedControl: BABYLON.Nullable<Control>;
        draggedControlDirection: DragOverLocation;
        isSaving: boolean;
        lockObject: LockObject;
        storeEditorData: (serializationObject: any) => void;
        customSave?: {
            label: string;
            action: (data: string) => Promise<string>;
        };
        customLoad?: {
            label: string;
            action: (data: string) => Promise<string>;
        };
        constructor();
    }
}
declare module GUIEDITOR {
    export interface IButtonLineComponentProps {
        label: string;
        onClick: () => void;
        icon?: string;
        iconLabel?: string;
    }
    export class ButtonLineComponent extends React.Component<IButtonLineComponentProps> {
        constructor(props: IButtonLineComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IFileButtonLineComponentProps {
        label: string;
        onClick: (file: File) => void;
        accept: string;
        icon?: string;
        iconLabel?: string;
    }
    export class FileButtonLineComponent extends React.Component<IFileButtonLineComponentProps> {
        private static _IDGenerator;
        private _id;
        private uploadInputRef;
        constructor(props: IFileButtonLineComponentProps);
        onChange(evt: any): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface ICheckBoxLineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        isSelected?: () => boolean;
        onSelect?: (value: boolean) => void;
        onValueChanged?: () => void;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        disabled?: boolean;
        icon?: string;
        iconLabel?: string;
    }
    export class CheckBoxLineComponent extends React.Component<ICheckBoxLineComponentProps, {
        isSelected: boolean;
        isDisabled?: boolean;
    }> {
        private static _UniqueIdSeed;
        private _uniqueId;
        private _localChange;
        constructor(props: ICheckBoxLineComponentProps);
        shouldComponentUpdate(nextProps: ICheckBoxLineComponentProps, nextState: {
            isSelected: boolean;
            isDisabled: boolean;
        }): boolean;
        onChange(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ITextLineComponentProps {
        label?: string;
        value?: string;
        color?: string;
        underline?: boolean;
        onLink?: () => void;
        url?: string;
        ignoreValue?: boolean;
        additionalClass?: string;
        icon?: string;
        iconLabel?: string;
        tooltip?: string;
    }
    export class TextLineComponent extends React.Component<ITextLineComponentProps> {
        constructor(props: ITextLineComponentProps);
        onLink(): void;
        renderContent(): JSX.Element | null;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export class StringTools {
        private static _SaveAs;
        private static _Click;
        /**
         * Download a string into a file that will be saved locally by the browser
         * @param content defines the string to download locally as a file
         */
        static DownloadAsFile(document: HTMLDocument, content: string, filename: string): void;
    }
}
declare module GUIEDITOR {
    interface IFloatLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        lockObject?: LockObject;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        additionalClass?: string;
        step?: string;
        digits?: number;
        useEuler?: boolean;
        min?: number;
        max?: number;
        smallUI?: boolean;
        onEnter?: (newValue: number) => void;
        icon?: string;
        iconLabel?: string;
    }
    export class FloatLineComponent extends React.Component<IFloatLineComponentProps, {
        value: string;
    }> {
        private _localChange;
        private _store;
        constructor(props: IFloatLineComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: IFloatLineComponentProps, nextState: {
            value: string;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        updateValue(valueString: string): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ISliderLineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        minimum: number;
        maximum: number;
        step: number;
        directValue?: number;
        useEuler?: boolean;
        onChange?: (value: number) => void;
        onInput?: (value: number) => void;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        decimalCount?: number;
        margin?: boolean;
        icon?: string;
        iconLabel?: string;
        lockObject?: LockObject;
    }
    export class SliderLineComponent extends React.Component<ISliderLineComponentProps, {
        value: number;
    }> {
        private _localChange;
        constructor(props: ISliderLineComponentProps);
        shouldComponentUpdate(nextProps: ISliderLineComponentProps, nextState: {
            value: number;
        }): boolean;
        onChange(newValueString: any): void;
        onInput(newValueString: any): void;
        prepareDataToRead(value: number): number;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ITextInputLineComponentProps {
        label: string;
        lockObject: LockObject;
        target?: any;
        propertyName?: string;
        value?: string;
        onChange?: (value: string) => void;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
        noUnderline?: boolean;
        numbersOnly?: boolean;
    }
    export class TextInputLineComponent extends React.Component<ITextInputLineComponentProps, {
        value: string;
    }> {
        private _localChange;
        constructor(props: ITextInputLineComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: ITextInputLineComponentProps, nextState: {
            value: string;
        }): boolean;
        raiseOnPropertyChanged(newValue: string, previousValue: string): void;
        updateValue(value: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICommandButtonComponentProps {
        tooltip: string;
        shortcut?: string;
        icon: string;
        iconLabel?: string;
        isActive: boolean;
        onClick: () => void;
    }
    export class CommandButtonComponent extends React.Component<ICommandButtonComponentProps> {
        constructor(props: ICommandButtonComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface INumericInputComponentProps {
        label: string;
        value: number;
        step?: number;
        onChange: (value: number) => void;
        precision?: number;
        icon?: string;
        iconLabel?: string;
    }
    export class NumericInputComponent extends React.Component<INumericInputComponentProps, {
        value: string;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: INumericInputComponentProps);
        shouldComponentUpdate(nextProps: INumericInputComponentProps, nextState: {
            value: string;
        }): boolean;
        updateValue(evt: any): void;
        onBlur(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IColorComponentEntryProps {
        value: number;
        label: string;
        max?: number;
        min?: number;
        onChange: (value: number) => void;
    }
    export class ColorComponentEntry extends React.Component<IColorComponentEntryProps> {
        constructor(props: IColorComponentEntryProps);
        updateValue(valueString: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IHexColorProps {
        value: string;
        expectedLength: number;
        onChange: (value: string) => void;
    }
    export class HexColor extends React.Component<IHexColorProps, {
        hex: string;
    }> {
        constructor(props: IHexColorProps);
        shouldComponentUpdate(nextProps: IHexColorProps, nextState: {
            hex: string;
        }): boolean;
        updateHexValue(valueString: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    /**
     * Interface used to specify creation options for color picker
     */
    export interface IColorPickerProps {
        color: BABYLON.Color3 | BABYLON.Color4;
        linearhint?: boolean;
        debugMode?: boolean;
        onColorChanged?: (color: BABYLON.Color3 | BABYLON.Color4) => void;
    }
    /**
     * Interface used to specify creation options for color picker
     */
    export interface IColorPickerState {
        color: BABYLON.Color3;
        alpha: number;
    }
    /**
     * Class used to create a color picker
     */
    export class ColorPicker extends React.Component<IColorPickerProps, IColorPickerState> {
        private _saturationRef;
        private _hueRef;
        private _isSaturationPointerDown;
        private _isHuePointerDown;
        constructor(props: IColorPickerProps);
        shouldComponentUpdate(nextProps: IColorPickerProps, nextState: IColorPickerState): boolean;
        onSaturationPointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
        onSaturationPointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
        onSaturationPointerMove(evt: React.PointerEvent<HTMLDivElement>): void;
        onHuePointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
        onHuePointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
        onHuePointerMove(evt: React.PointerEvent<HTMLDivElement>): void;
        private _evaluateSaturation;
        private _evaluateHue;
        componentDidUpdate(): void;
        raiseOnColorChanged(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IColorPickerComponentProps {
        value: BABYLON.Color4 | BABYLON.Color3;
        linearHint?: boolean;
        onColorChanged: (newOne: string) => void;
        icon?: string;
        iconLabel?: string;
        shouldPopRight?: boolean;
    }
    interface IColorPickerComponentState {
        pickerEnabled: boolean;
        color: BABYLON.Color3 | BABYLON.Color4;
        hex: string;
    }
    export class ColorPickerLineComponent extends React.Component<IColorPickerComponentProps, IColorPickerComponentState> {
        private _floatRef;
        private _floatHostRef;
        constructor(props: IColorPickerComponentProps);
        syncPositions(): void;
        shouldComponentUpdate(nextProps: IColorPickerComponentProps, nextState: IColorPickerComponentState): boolean;
        componentDidUpdate(): void;
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IColor3LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        isLinear?: boolean;
        icon?: string;
        lockObject?: LockObject;
        iconLabel?: string;
        onValueChange?: (value: string) => void;
    }
    export class Color3LineComponent extends React.Component<IColor3LineComponentProps, {
        isExpanded: boolean;
        color: BABYLON.Color3 | BABYLON.Color4;
        colorText: string;
    }> {
        private _localChange;
        constructor(props: IColor3LineComponentProps);
        private convertToColor3;
        shouldComponentUpdate(nextProps: IColor3LineComponentProps, nextState: {
            color: BABYLON.Color3 | BABYLON.Color4;
            colorText: string;
        }): boolean;
        setPropertyValue(newColor: BABYLON.Color3 | BABYLON.Color4, newColorText: string): void;
        onChange(newValue: string): void;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Color3 | BABYLON.Color4): void;
        updateStateR(value: number): void;
        updateStateG(value: number): void;
        updateStateB(value: number): void;
        copyToClipboard(): void;
        convert(colorString: string): void;
        private _colorStringSaved;
        private _colorPickerOpen;
        private _colorString;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICommonControlPropertyGridComponentProps {
        control: Control;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonControlPropertyGridComponent extends React.Component<ICommonControlPropertyGridComponentProps> {
        private _width;
        private _height;
        private _responsive;
        constructor(props: ICommonControlPropertyGridComponentProps);
        private _updateAlignment;
        private _checkAndUpdateValues;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ISliderPropertyGridComponentProps {
        slider: Slider;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SliderPropertyGridComponent extends React.Component<ISliderPropertyGridComponentProps> {
        constructor(props: ISliderPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ILinePropertyGridComponentProps {
        line: Line;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class LinePropertyGridComponent extends React.Component<ILinePropertyGridComponentProps> {
        constructor(props: ILinePropertyGridComponentProps);
        onDashChange(value: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IRadioButtonPropertyGridComponentProps {
        radioButton: RadioButton;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class RadioButtonPropertyGridComponent extends React.Component<IRadioButtonPropertyGridComponentProps> {
        constructor(props: IRadioButtonPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export const Null_Value: number;
    export interface IOptionsLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        options: BABYLON.IInspectableOptions[];
        noDirectUpdate?: boolean;
        onSelect?: (value: number) => void;
        extractValue?: () => number;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        allowNullValue?: boolean;
        icon?: string;
        iconLabel?: string;
    }
    export class OptionsLineComponent extends React.Component<IOptionsLineComponentProps, {
        value: number;
    }> {
        private _localChange;
        private remapValueIn;
        private remapValueOut;
        constructor(props: IOptionsLineComponentProps);
        shouldComponentUpdate(nextProps: IOptionsLineComponentProps, nextState: {
            value: number;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        updateValue(valueString: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ITextBlockPropertyGridComponentProps {
        textBlock: TextBlock;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class TextBlockPropertyGridComponent extends React.Component<ITextBlockPropertyGridComponentProps> {
        constructor(props: ITextBlockPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IInputTextPropertyGridComponentProps {
        inputText: InputText;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class InputTextPropertyGridComponent extends React.Component<IInputTextPropertyGridComponentProps> {
        constructor(props: IInputTextPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IColorPickerPropertyGridComponentProps {
        colorPicker: ColorPicker;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ColorPickerPropertyGridComponent extends React.Component<IColorPickerPropertyGridComponentProps> {
        constructor(props: IColorPickerPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IImagePropertyGridComponentProps {
        image: Image;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ImagePropertyGridComponent extends React.Component<IImagePropertyGridComponentProps> {
        constructor(props: IImagePropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IImageBasedSliderPropertyGridComponentProps {
        imageBasedSlider: ImageBasedSlider;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ImageBasedSliderPropertyGridComponent extends React.Component<IImageBasedSliderPropertyGridComponentProps> {
        constructor(props: IImageBasedSliderPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IRectanglePropertyGridComponentProps {
        rectangle: Rectangle;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class RectanglePropertyGridComponent extends React.Component<IRectanglePropertyGridComponentProps> {
        constructor(props: IRectanglePropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IStackPanelPropertyGridComponentProps {
        stackPanel: StackPanel;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class StackPanelPropertyGridComponent extends React.Component<IStackPanelPropertyGridComponentProps> {
        constructor(props: IStackPanelPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IGridPropertyGridComponentProps {
        grid: Grid;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class GridPropertyGridComponent extends React.Component<IGridPropertyGridComponentProps> {
        constructor(props: IGridPropertyGridComponentProps);
        private _removingColumn;
        private _removingRow;
        private _previousGrid;
        private _rowDefinitions;
        private _rowEditFlags;
        private _columnEditFlags;
        private _columnDefinitions;
        private _editedRow;
        private _editedColumn;
        renderRows(): JSX.Element[];
        setRowValues(): void;
        setColumnValues(): void;
        renderColumns(): JSX.Element[];
        resizeRow(): void;
        resizeColumn(): void;
        checkValue(value: string, percent: boolean): string;
        checkPercentage(value: string): boolean;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IScrollViewerPropertyGridComponentProps {
        scrollViewer: ScrollViewer;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ScrollViewerPropertyGridComponent extends React.Component<IScrollViewerPropertyGridComponentProps> {
        constructor(props: IScrollViewerPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IEllipsePropertyGridComponentProps {
        ellipse: Ellipse;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class EllipsePropertyGridComponent extends React.Component<IEllipsePropertyGridComponentProps> {
        constructor(props: IEllipsePropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICheckboxPropertyGridComponentProps {
        checkbox: Checkbox;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CheckboxPropertyGridComponent extends React.Component<ICheckboxPropertyGridComponentProps> {
        constructor(props: ICheckboxPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IControlPropertyGridComponentProps {
        control: Control;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ControlPropertyGridComponent extends React.Component<IControlPropertyGridComponentProps> {
        constructor(props: IControlPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IParentingPropertyGridComponentProps {
        control: Control;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ParentingPropertyGridComponent extends React.Component<IParentingPropertyGridComponentProps> {
        constructor(props: IParentingPropertyGridComponentProps);
        private _columnNumber;
        private _rowNumber;
        updateGridPosition(): void;
        getCellInfo(): void;
        private _changeCell;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IDisplayGridPropertyGridComponentProps {
        displayGrid: DisplayGrid;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class DisplayGridPropertyGridComponent extends React.Component<IDisplayGridPropertyGridComponentProps> {
        constructor(props: IDisplayGridPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IButtonPropertyGridComponentProps {
        rectangle: Rectangle;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        onAddComponent: (newComponent: string) => void;
    }
    export class ButtonPropertyGridComponent extends React.Component<IButtonPropertyGridComponentProps> {
        constructor(props: IButtonPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export class GUINodeTools {
        static ImageControlDefaultUrl: string;
        static CreateControlFromString(data: string): Grid | Rectangle | Line | TextBlock | Image | Slider | RadioButton | InputText | ColorPicker | ImageBasedSlider | StackPanel | Ellipse | Checkbox | DisplayGrid;
    }
}
declare module GUIEDITOR {
    interface IPropertyTabComponentProps {
        globalState: GlobalState;
    }
    interface IPropertyTabComponentState {
        currentNode: BABYLON.Nullable<Control>;
    }
    export class PropertyTabComponent extends React.Component<IPropertyTabComponentProps, IPropertyTabComponentState> {
        private _onBuiltObserver;
        private _timerIntervalId;
        private _lockObject;
        private _sizeOption;
        constructor(props: IPropertyTabComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        load(file: File): void;
        save(saveCallback: () => void): void;
        saveLocally: () => void;
        saveToSnippetServerHelper: (content: string, adt: AdvancedDynamicTexture) => Promise<string>;
        saveToSnippetServer: () => Promise<void>;
        loadFromSnippet(): void;
        renderProperties(): JSX.Element | null;
        renderControlIcon(): string;
        render(): JSX.Element | null;
    }
}
declare module GUIEDITOR {
    interface IPortalProps {
        globalState: GlobalState;
    }
    export class Portal extends React.Component<IPortalProps> {
        render(): React.ReactPortal;
    }
}
declare module GUIEDITOR {
    interface IMessageDialogComponentProps {
        globalState: GlobalState;
    }
    export class MessageDialogComponent extends React.Component<IMessageDialogComponentProps, {
        message: string;
        isError: boolean;
    }> {
        constructor(props: IMessageDialogComponentProps);
        render(): JSX.Element | null;
    }
}
declare module GUIEDITOR {
    interface ITreeItemLabelComponentProps {
        label: string;
        onClick?: () => void;
        color: string;
    }
    export class TreeItemLabelComponent extends React.Component<ITreeItemLabelComponentProps> {
        constructor(props: ITreeItemLabelComponentProps);
        onClick(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IExtensionsComponentProps {
        target: any;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
    }
    export class ExtensionsComponent extends React.Component<IExtensionsComponentProps, {
        popupVisible: boolean;
    }> {
        private _popup;
        private extensionRef;
        constructor(props: IExtensionsComponentProps);
        showPopup(): void;
        componentDidMount(): void;
        componentDidUpdate(): void;
        render(): JSX.Element | null;
    }
}
declare module GUIEDITOR {
    interface IControlTreeItemComponentProps {
        control: Control;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        onClick: () => void;
        globalState: GlobalState;
        isHovered: boolean;
        dragOverHover: boolean;
        dragOverLocation: DragOverLocation;
    }
    export class ControlTreeItemComponent extends React.Component<IControlTreeItemComponentProps, {
        isActive: boolean;
        isVisible: boolean;
    }> {
        constructor(props: IControlTreeItemComponentProps);
        highlight(): void;
        switchVisibility(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface ITreeItemSelectableComponentProps {
        entity: any;
        selectedEntity?: any;
        mustExpand?: boolean;
        offset: number;
        globalState: GlobalState;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        filter: BABYLON.Nullable<string>;
    }
    export class TreeItemSelectableComponent extends React.Component<ITreeItemSelectableComponentProps, {
        isSelected: boolean;
        isHovered: boolean;
        dragOverLocation: DragOverLocation;
    }> {
        dragOverHover: boolean;
        private _onSelectionChangedObservable;
        private _onDraggingEndObservable;
        private _onDraggingStartObservable;
        constructor(props: ITreeItemSelectableComponentProps);
        switchExpandedState(): void;
        shouldComponentUpdate(nextProps: ITreeItemSelectableComponentProps, nextState: {
            isSelected: boolean;
        }): boolean;
        scrollIntoView(): void;
        componentWillUnmount(): void;
        onSelect(): void;
        renderChildren(isExpanded: boolean): (JSX.Element | null)[] | null;
        render(): JSX.Element | null;
        dragOver(event: React.DragEvent<HTMLDivElement>): void;
        drop(): void;
    }
}
declare module GUIEDITOR {
    export interface ITreeItemComponentProps {
        items?: BABYLON.Nullable<any[]>;
        label: string;
        offset: number;
        filter: BABYLON.Nullable<string>;
        forceSubitems?: boolean;
        globalState: GlobalState;
        entity?: any;
        selectedEntity: any;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        contextMenuItems?: {
            label: string;
            action: () => void;
        }[];
    }
    export class TreeItemComponent extends React.Component<ITreeItemComponentProps, {
        isExpanded: boolean;
        mustExpand: boolean;
    }> {
        static _ContextMenuUniqueIdGenerator: number;
        constructor(props: ITreeItemComponentProps);
        switchExpandedState(): void;
        shouldComponentUpdate(nextProps: ITreeItemComponentProps, nextState: {
            isExpanded: boolean;
        }): boolean;
        expandAll(expand: boolean): void;
        renderContextMenu(): JSX.Element | null;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ISceneExplorerFilterComponentProps {
        onFilter: (filter: string) => void;
    }
    export class SceneExplorerFilterComponent extends React.Component<ISceneExplorerFilterComponentProps> {
        constructor(props: ISceneExplorerFilterComponentProps);
        render(): JSX.Element;
    }
    interface ISceneExplorerComponentProps {
        scene?: BABYLON.Scene;
        noCommands?: boolean;
        noHeader?: boolean;
        noExpand?: boolean;
        noClose?: boolean;
        extensibilityGroups?: BABYLON.IExplorerExtensibilityGroup[];
        globalState: GlobalState;
        popupMode?: boolean;
        onPopup?: () => void;
        onClose?: () => void;
    }
    export class SceneExplorerComponent extends React.Component<ISceneExplorerComponentProps, {
        filter: BABYLON.Nullable<string>;
        selectedEntity: any;
        scene: BABYLON.Nullable<BABYLON.Scene>;
    }> {
        private _onSelectionChangeObserver;
        private _onParrentingChangeObserver;
        private _onNewSceneObserver;
        private _onPropertyChangedObservable;
        constructor(props: ISceneExplorerComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        filterContent(filter: string): void;
        findSiblings(parent: any, items: any[], target: any, goNext: boolean, data: {
            previousOne?: any;
            found?: boolean;
        }): boolean;
        processKeys(keyEvent: React.KeyboardEvent<HTMLDivElement>): void;
        renderContent(): JSX.Element | null;
        onClose(): void;
        onPopup(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICommandDropdownComponentProps {
        globalState: GlobalState;
        icon?: string;
        tooltip: string;
        defaultValue?: string;
        items: {
            label: string;
            icon?: string;
            fileButton?: boolean;
            onClick?: () => void;
            onCheck?: (value: boolean) => void;
            storeKey?: string;
            isActive?: boolean;
            defaultValue?: boolean | string;
            subItems?: string[];
        }[];
        toRight?: boolean;
    }
    export class CommandDropdownComponent extends React.Component<ICommandDropdownComponentProps, {
        isExpanded: boolean;
        activeState: string;
    }> {
        constructor(props: ICommandDropdownComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICommandBarComponentProps {
        globalState: GlobalState;
    }
    export class CommandBarComponent extends React.Component<ICommandBarComponentProps> {
        private _panning;
        private _zooming;
        private _selecting;
        private _moving;
        private _outlines;
        constructor(props: ICommandBarComponentProps);
        private updateNodeOutline;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IGraphEditorProps {
        globalState: GlobalState;
    }
    interface IGraphEditorState {
        showPreviewPopUp: boolean;
    }
    export class WorkbenchEditor extends React.Component<IGraphEditorProps, IGraphEditorState> {
        private _startX;
        private _moveInProgress;
        private _leftWidth;
        private _rightWidth;
        private _toolBarIconSize;
        private _onWidgetKeyUpPointer;
        private _popUpWindow;
        componentDidMount(): void;
        componentWillUnmount(): void;
        constructor(props: IGraphEditorProps);
        showWaitScreen(): void;
        hideWaitScreen(): void;
        onPointerDown(evt: React.PointerEvent<HTMLDivElement>): void;
        onPointerUp(evt: React.PointerEvent<HTMLDivElement>): void;
        resizeColumns(evt: React.PointerEvent<HTMLDivElement>, forLeft?: boolean): void;
        buildColumnLayout(): string;
        handlePopUp: () => void;
        handleClosingPopUp: () => void;
        createPopupWindow: (title: string, windowVariableName: string, width?: number, height?: number) => Window | null;
        copyStyles: (sourceDoc: HTMLDocument, targetDoc: HTMLDocument) => void;
        render(): JSX.Element;
        _items: {
            label: string;
            icon?: string;
            fileButton?: boolean;
            onClick?: () => void;
            onCheck?: (value: boolean) => void;
            storeKey?: string;
            isActive?: boolean;
            defaultValue?: boolean | string;
            subItems?: string[];
        }[];
        createItems(): void;
        onCreate(value: string): void;
        createToolbar(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export class Popup {
        static CreatePopup(title: string, windowVariableName: string, width?: number, height?: number): HTMLDivElement | null;
        private static _CopyStyles;
    }
}
declare module GUIEDITOR {
    /**
     * Interface used to specify creation options for the gui editor
     */
    export interface IGUIEditorOptions {
        customLoad: {
            label: string;
            action: (data: string) => Promise<string>;
        } | undefined;
        hostElement?: HTMLElement;
        customSave?: {
            label: string;
            action: (data: string) => Promise<string>;
        };
        currentSnippetToken?: string;
        customLoadObservable?: BABYLON.Observable<any>;
    }
    /**
     * Class used to create a gui editor
     */
    export class GUIEditor {
        private static _CurrentState;
        /**
         * Show the gui editor
         * @param options defines the options to use to configure the gui editor
         */
        static Show(options: IGUIEditorOptions): void;
    }
}
declare module GUIEDITOR {
    export interface INodeLocationInfo {
        blockId: number;
        x: number;
        y: number;
    }
    export interface IFrameData {
        x: number;
        y: number;
        width: number;
        height: number;
        color: number[];
        name: string;
        isCollapsed: boolean;
        blocks: number[];
        comments: string;
    }
    export interface IEditorData {
        locations: INodeLocationInfo[];
        x: number;
        y: number;
        zoom: number;
        frames?: IFrameData[];
        map?: {
            [key: number]: number;
        };
    }
}
declare module GUIEDITOR {
    export interface ISelectedLineContainer {
        selectedLineContainerTitles: Array<string>;
        selectedLineContainerTitlesNoFocus: Array<string>;
    }
}
declare module GUIEDITOR {
    interface ILineContainerComponentProps {
        selection?: ISelectedLineContainer;
        title: string;
        children: any[] | any;
        closed?: boolean;
    }
    export class LineContainerComponent extends React.Component<ILineContainerComponentProps, {
        isExpanded: boolean;
        isHighlighted: boolean;
    }> {
        constructor(props: ILineContainerComponentProps);
        switchExpandedState(): void;
        renderHeader(): JSX.Element;
        componentDidMount(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IButtonLineComponentProps {
        data: string;
        tooltip: string;
    }
    export class DraggableLineComponent extends React.Component<IButtonLineComponentProps> {
        constructor(props: IButtonLineComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IGuiListComponentProps {
        globalState: GlobalState;
    }
    export class GuiListComponent extends React.Component<IGuiListComponentProps, {
        filter: string;
    }> {
        private _onResetRequiredObserver;
        private static _Tooltips;
        constructor(props: IGuiListComponentProps);
        componentWillUnmount(): void;
        filterContent(filter: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export class PropertyChangedEvent {
        object: any;
        property: string;
        value: any;
        initialValue: any;
    }
}
declare module GUIEDITOR {
    interface IFloatLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        additionalClass?: string;
        step?: string;
        digits?: number;
        globalState: GlobalState;
        min?: number;
        max?: number;
        smallUI?: boolean;
        onEnter?: (newValue: number) => void;
    }
    export class FloatLineComponent extends React.Component<IFloatLineComponentProps, {
        value: string;
    }> {
        private _localChange;
        private _store;
        private _regExp;
        private _digits;
        constructor(props: IFloatLineComponentProps);
        shouldComponentUpdate(nextProps: IFloatLineComponentProps, nextState: {
            value: string;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        updateValue(valueString: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ILineWithFileButtonComponentProps {
        title: string;
        closed?: boolean;
        label: string;
        iconImage: any;
        onIconClick: (file: File) => void;
        accept: string;
        uploadName?: string;
    }
    export class LineWithFileButtonComponent extends React.Component<ILineWithFileButtonComponentProps, {
        isExpanded: boolean;
    }> {
        private uploadRef;
        constructor(props: ILineWithFileButtonComponentProps);
        onChange(evt: any): void;
        switchExpandedState(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface INumericInputComponentProps {
        label: string;
        value: number;
        step?: number;
        onChange: (value: number) => void;
        globalState: GlobalState;
    }
    export class NumericInputComponent extends React.Component<INumericInputComponentProps, {
        value: string;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: INumericInputComponentProps);
        shouldComponentUpdate(nextProps: INumericInputComponentProps, nextState: {
            value: string;
        }): boolean;
        updateValue(evt: any): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ISliderLineComponentProps {
        label: string;
        target?: any;
        propertyName?: string;
        minimum: number;
        maximum: number;
        step: number;
        directValue?: number;
        useEuler?: boolean;
        onChange?: (value: number) => void;
        onInput?: (value: number) => void;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        decimalCount?: number;
        globalState: GlobalState;
    }
    export class SliderLineComponent extends React.Component<ISliderLineComponentProps, {
        value: number;
    }> {
        private _localChange;
        constructor(props: ISliderLineComponentProps);
        shouldComponentUpdate(nextProps: ISliderLineComponentProps, nextState: {
            value: number;
        }): boolean;
        onChange(newValueString: any): void;
        onInput(newValueString: any): void;
        prepareDataToRead(value: number): number;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ITextInputLineComponentProps {
        label: string;
        globalState: GlobalState;
        target?: any;
        propertyName?: string;
        value?: string;
        multilines?: boolean;
        onChange?: (value: string) => void;
        validator?: (value: string) => boolean;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class TextInputLineComponent extends React.Component<ITextInputLineComponentProps, {
        value: string;
    }> {
        private _localChange;
        constructor(props: ITextInputLineComponentProps);
        shouldComponentUpdate(nextProps: ITextInputLineComponentProps, nextState: {
            value: string;
        }): boolean;
        raiseOnPropertyChanged(newValue: string, previousValue: string): void;
        updateValue(value: string, raisePropertyChanged: boolean): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IBooleanLineComponentProps {
        label: string;
        value: boolean;
        icon?: string;
        iconLabel?: string;
    }
    export class BooleanLineComponent extends React.Component<IBooleanLineComponentProps> {
        constructor(props: IBooleanLineComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IColor4LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        onChange?: () => void;
        isLinear?: boolean;
        icon?: string;
        iconLabel?: string;
    }
    export class Color4LineComponent extends React.Component<IColor4LineComponentProps, {
        isExpanded: boolean;
        color: BABYLON.Color4;
    }> {
        private _localChange;
        constructor(props: IColor4LineComponentProps);
        shouldComponentUpdate(nextProps: IColor4LineComponentProps, nextState: {
            color: BABYLON.Color4;
        }): boolean;
        setPropertyValue(newColor: BABYLON.Color4): void;
        onChange(newValue: string): void;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Color4): void;
        updateStateR(value: number): void;
        updateStateG(value: number): void;
        updateStateB(value: number): void;
        updateStateA(value: number): void;
        copyToClipboard(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IFileMultipleButtonLineComponentProps {
        label: string;
        onClick: (event: any) => void;
        accept: string;
        icon?: string;
        iconLabel?: string;
    }
    export class FileMultipleButtonLineComponent extends React.Component<IFileMultipleButtonLineComponentProps> {
        private static _IDGenerator;
        private _id;
        private uploadInputRef;
        constructor(props: IFileMultipleButtonLineComponentProps);
        onChange(evt: any): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IHexLineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        lockObject?: LockObject;
        onChange?: (newValue: number) => void;
        isInteger?: boolean;
        replaySourceReplacement?: string;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        additionalClass?: string;
        step?: string;
        digits?: number;
        useEuler?: boolean;
        min?: number;
        icon?: string;
        iconLabel?: string;
    }
    export class HexLineComponent extends React.Component<IHexLineComponentProps, {
        value: string;
    }> {
        private _localChange;
        private _store;
        private _propertyChange;
        constructor(props: IHexLineComponentProps);
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: IHexLineComponentProps, nextState: {
            value: string;
        }): boolean;
        raiseOnPropertyChanged(newValue: number, previousValue: number): void;
        convertToHexString(valueString: string): string;
        updateValue(valueString: string, raisePropertyChanged: boolean): void;
        lock(): void;
        unlock(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    export interface IIconButtonLineComponentProps {
        icon: string;
        onClick: () => void;
        tooltip: string;
        active?: boolean;
    }
    export class IconButtonLineComponent extends React.Component<IIconButtonLineComponentProps> {
        constructor(props: IIconButtonLineComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IIndentedTextLineComponentProps {
        value?: string;
        color?: string;
        underline?: boolean;
        onLink?: () => void;
        url?: string;
        additionalClass?: string;
    }
    export class IndentedTextLineComponent extends React.Component<IIndentedTextLineComponentProps> {
        constructor(props: IIndentedTextLineComponentProps);
        onLink(): void;
        renderContent(): JSX.Element;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ILinkButtonComponentProps {
        label: string;
        buttonLabel: string;
        url?: string;
        onClick: () => void;
        onIconClick?: () => void;
    }
    export class LinkButtonComponent extends React.Component<ILinkButtonComponentProps> {
        constructor(props: ILinkButtonComponentProps);
        onLink(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IMessageLineComponentProps {
        text: string;
        color?: string;
    }
    export class MessageLineComponent extends React.Component<IMessageLineComponentProps> {
        constructor(props: IMessageLineComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IRadioButtonLineComponentProps {
        onSelectionChangedObservable: BABYLON.Observable<RadioButtonLineComponent>;
        label: string;
        isSelected: () => boolean;
        onSelect: () => void;
        icon?: string;
        iconLabel?: string;
    }
    export class RadioButtonLineComponent extends React.Component<IRadioButtonLineComponentProps, {
        isSelected: boolean;
    }> {
        private _onSelectionChangedObserver;
        constructor(props: IRadioButtonLineComponentProps);
        componentDidMount(): void;
        componentWillUnmount(): void;
        onChange(): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IValueLineComponentProps {
        label: string;
        value: number;
        color?: string;
        fractionDigits?: number;
        units?: string;
        icon?: string;
        iconLabel?: string;
    }
    export class ValueLineComponent extends React.Component<IValueLineComponentProps> {
        constructor(props: IValueLineComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IVector2LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector2) => void;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
    }
    export class Vector2LineComponent extends React.Component<IVector2LineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Vector2;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: IVector2LineComponentProps);
        shouldComponentUpdate(nextProps: IVector2LineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Vector2;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector2): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IVector3LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector3) => void;
        useEuler?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        noSlider?: boolean;
        icon?: string;
        iconLabel?: string;
    }
    export class Vector3LineComponent extends React.Component<IVector3LineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Vector3;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: IVector3LineComponentProps);
        getCurrentValue(): any;
        shouldComponentUpdate(nextProps: IVector3LineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Vector3;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector3): void;
        updateVector3(): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        updateStateZ(value: number): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IVector4LineComponentProps {
        label: string;
        target: any;
        propertyName: string;
        step?: number;
        onChange?: (newvalue: BABYLON.Vector4) => void;
        useEuler?: boolean;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
        icon?: string;
        iconLabel?: string;
    }
    export class Vector4LineComponent extends React.Component<IVector4LineComponentProps, {
        isExpanded: boolean;
        value: BABYLON.Vector4;
    }> {
        static defaultProps: {
            step: number;
        };
        private _localChange;
        constructor(props: IVector4LineComponentProps);
        getCurrentValue(): any;
        shouldComponentUpdate(nextProps: IVector4LineComponentProps, nextState: {
            isExpanded: boolean;
            value: BABYLON.Vector4;
        }): boolean;
        switchExpandState(): void;
        raiseOnPropertyChanged(previousValue: BABYLON.Vector4): void;
        updateVector4(): void;
        updateStateX(value: number): void;
        updateStateY(value: number): void;
        updateStateZ(value: number): void;
        updateStateW(value: number): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICommonControlPropertyGridComponentProps {
        control: Control;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CommonControlPropertyGridComponent extends React.Component<ICommonControlPropertyGridComponentProps> {
        constructor(props: ICommonControlPropertyGridComponentProps);
        renderGridInformation(): JSX.Element | null;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ICheckboxPropertyGridComponentProps {
        checkbox: Checkbox;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class CheckboxPropertyGridComponent extends React.Component<ICheckboxPropertyGridComponentProps> {
        constructor(props: ICheckboxPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IColorPickerPropertyGridComponentProps {
        colorPicker: ColorPicker;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ColorPickerPropertyGridComponent extends React.Component<IColorPickerPropertyGridComponentProps> {
        constructor(props: IColorPickerPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IControlPropertyGridComponentProps {
        control: Control;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ControlPropertyGridComponent extends React.Component<IControlPropertyGridComponentProps> {
        constructor(props: IControlPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IEllipsePropertyGridComponentProps {
        ellipse: Ellipse;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class EllipsePropertyGridComponent extends React.Component<IEllipsePropertyGridComponentProps> {
        constructor(props: IEllipsePropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IGridPropertyGridComponentProps {
        grid: Grid;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class GridPropertyGridComponent extends React.Component<IGridPropertyGridComponentProps> {
        constructor(props: IGridPropertyGridComponentProps);
        renderRows(): JSX.Element[];
        renderColumns(): JSX.Element[];
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IImageBasedSliderPropertyGridComponentProps {
        imageBasedSlider: ImageBasedSlider;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ImageBasedSliderPropertyGridComponent extends React.Component<IImageBasedSliderPropertyGridComponentProps> {
        constructor(props: IImageBasedSliderPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IImagePropertyGridComponentProps {
        image: Image;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ImagePropertyGridComponent extends React.Component<IImagePropertyGridComponentProps> {
        constructor(props: IImagePropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IInputTextPropertyGridComponentProps {
        inputText: InputText;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class InputTextPropertyGridComponent extends React.Component<IInputTextPropertyGridComponentProps> {
        constructor(props: IInputTextPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ILinePropertyGridComponentProps {
        line: Line;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class LinePropertyGridComponent extends React.Component<ILinePropertyGridComponentProps> {
        constructor(props: ILinePropertyGridComponentProps);
        onDashChange(value: string): void;
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IRadioButtonPropertyGridComponentProps {
        radioButton: RadioButton;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class RadioButtonPropertyGridComponent extends React.Component<IRadioButtonPropertyGridComponentProps> {
        constructor(props: IRadioButtonPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IRectanglePropertyGridComponentProps {
        rectangle: Rectangle;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class RectanglePropertyGridComponent extends React.Component<IRectanglePropertyGridComponentProps> {
        constructor(props: IRectanglePropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IScrollViewerPropertyGridComponentProps {
        scrollViewer: ScrollViewer;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class ScrollViewerPropertyGridComponent extends React.Component<IScrollViewerPropertyGridComponentProps> {
        constructor(props: IScrollViewerPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ISliderPropertyGridComponentProps {
        slider: Slider;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class SliderPropertyGridComponent extends React.Component<ISliderPropertyGridComponentProps> {
        constructor(props: ISliderPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface IStackPanelPropertyGridComponentProps {
        stackPanel: StackPanel;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class StackPanelPropertyGridComponent extends React.Component<IStackPanelPropertyGridComponentProps> {
        constructor(props: IStackPanelPropertyGridComponentProps);
        render(): JSX.Element;
    }
}
declare module GUIEDITOR {
    interface ITextBlockPropertyGridComponentProps {
        textBlock: TextBlock;
        lockObject: LockObject;
        onPropertyChangedObservable?: BABYLON.Observable<PropertyChangedEvent>;
    }
    export class TextBlockPropertyGridComponent extends React.Component<ITextBlockPropertyGridComponentProps> {
        constructor(props: ITextBlockPropertyGridComponentProps);
        render(): JSX.Element;
    }
}