import type { CharacterPack, UseLayersHook } from "../types";
import { actionAssets, REQUIRED_STEMS } from "./actions";
import { useCharacterLayers } from "./useLayers";

const useLayers: UseLayersHook = (state, renderWidthPx, options) =>
  useCharacterLayers(state, renderWidthPx, {
    idleResetSeq: options?.idleResetSeq ?? 0,
    replaySeq: options?.replaySeq ?? 0,
    onTransientEnd: options?.onTransientEnd,
  });

export const foxPack: CharacterPack = {
  id: "fox",
  displayName: "Fox",
  requiredStems: REQUIRED_STEMS,
  actions: actionAssets,
  useLayers,
  trayIconStem: "idle",
};
