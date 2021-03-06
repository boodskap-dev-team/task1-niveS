import * as graphic from '../../util/graphic';
import TreemapSeriesModel, { TreemapSeriesOption } from './TreemapSeries';
import ExtensionAPI from '../../core/ExtensionAPI';
import { TreeNode } from '../../data/Tree';
import { ZRElementEvent, BoxLayoutOptionMixin } from '../../util/types';
import Model from '../../model/Model';
interface OnSelectCallback {
    (node: TreeNode, e: ZRElementEvent): void;
}
interface LayoutParam {
    pos: BoxLayoutOptionMixin;
    box: {
        width: number;
        height: number;
    };
    emptyItemWidth: number;
    totalWidth: number;
    renderList: {
        node: TreeNode;
        text: string;
        width: number;
    }[];
}
declare type BreadcrumbItemStyleModel = Model<TreemapSeriesOption['breadcrumb']['itemStyle']>;
declare type BreadcrumbTextStyleModel = Model<TreemapSeriesOption['breadcrumb']['itemStyle']['textStyle']>;
declare class Breadcrumb {
    group: graphic.Group;
    constructor(containerGroup: graphic.Group);
    render(seriesModel: TreemapSeriesModel, api: ExtensionAPI, targetNode: TreeNode, onSelect: OnSelectCallback): void;
    _prepare(targetNode: TreeNode, layoutParam: LayoutParam, textStyleModel: BreadcrumbTextStyleModel): void;
    _renderContent(seriesModel: TreemapSeriesModel, layoutParam: LayoutParam, normalStyleModel: BreadcrumbItemStyleModel, textStyleModel: BreadcrumbTextStyleModel, onSelect: OnSelectCallback): void;
    remove(): void;
}
export default Breadcrumb;
