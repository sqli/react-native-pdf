/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactNative from 'react-native';

export type TableContent = {
    children: TableContent[],
    mNativePtr: number,
    pageIdx: number,
    title: string,
};

export type Source = {
    uri?: string;
    headers?: {
        [key: string]: string;
    };
    cache?: boolean;
    cacheFileName?: string;
    expiration?: number;
    method?: string;
};

export interface PdfProps {
    style?: ReactNative.StyleProp<ReactNative.ViewStyle>,
    progressContainerStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>,
    source: Source | number,
    page?: number,
    scale?: number,
    minScale?: number,
    maxScale?: number,
    horizontal?: boolean,
    showsHorizontalScrollIndicator?: boolean,
    showsVerticalScrollIndicator?: boolean,
    spacing?: number,
    password?: string,
    renderActivityIndicator?: (progress: number) => React.ReactElement,
    enableAntialiasing?: boolean,
    enablePaging?: boolean,
    enableRTL?: boolean,
    enableAnnotationRendering?: boolean,
    enableDoubleTapZoom?: boolean;
    fitPolicy?: number,
    trustAllCerts?: boolean,
    singlePage?: boolean,
    onLoadProgress?: (percent: number,) => void,
    onLoadComplete?: (numberOfPages: number, path: string, size: {height: number, width: number}, tableContents?: TableContent[]) => void,
    onPageChanged?: (page: number, numberOfPages: number) => void,
    onError?: (error: object) => void,
    onPageSingleTap?: (page: number, pageWidth: number, pageHeight: number, x: number, y: number) => void,
    onScaleChanged?: (scale: number) => void,
    onPressLink?: (url: string) => void,
}

declare class Pdf extends React.Component<PdfProps, any> {
    setPage: (pageNumber: number) => void;
}

export default Pdf;
