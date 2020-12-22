// Type definitions for react-native-photo-view 1.5
// Project: https://github.com/alwx/react-native-photo-view
// Definitions by: Christian Chown <https://github.com/christianchown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ImageSourcePropType, NativeSyntheticEvent, ViewProps } from 'react-native';

export interface PhotoViewNativeScaleEvent {
    scale: number
    scaleFactor: number
    focusX: number
    focusY: number
}

export interface PhotoViewNativeViewTapEvent {
    x: number
    y: number
}

export interface PhotoViewNativeTapEvent extends PhotoViewNativeViewTapEvent {
    scale: number
}



export interface ReactNativePhotoViewProps {
    source?: { uri: string };
    loadingIndicatorSource?: string;
    fadeDuration?: number;
    minimumZoomScale?: number;
    maximumZoomScale?: number;
    showsHorizontalScrollIndicator?: boolean;
    showsVerticalScrollIndicator?: boolean;
    scale?: number;
    androidZoomTransitionDuration?: number;
    androidScaleType?: 'center' | 'centerCrop' | 'centerInside' | 'fitCenter' | 'fitStart' | 'fitEnd' | 'fitXY';
    onLoadStart?: () => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    onProgress?: (loaded: number, total: number) => void;
    onTap?: (target: NativeSyntheticEvent<PhotoViewNativeTapEvent>) => void;
    onViewTap?: (target: NativeSyntheticEvent<PhotoViewNativeViewTapEvent>) => void;
    onScale?: (target: NativeSyntheticEvent<PhotoViewNativeScaleEvent>) => void;
}

export default class ReactNativePhotoView extends React.Component<ReactNativePhotoViewProps & ViewProps> {}
