import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import AvatarImg from "../../assets/avatar.png";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme";

const Sizes = {
  Small: {
    containerSize: 32,
    avatarSize: 28,
  },
  Normal: {
      containerSize: 48,
      avatarSize: 42,
  }
};

type Props = {
    imageUri: string | undefined;
    sizes?: 'Small' | 'Normal';
}

const Avatar_Default = Image.resolveAssetSource(AvatarImg).uri

export function UserPhoto({imageUri, sizes = 'Normal'}: Props) {
    const { containerSize, avatarSize } = Sizes[sizes];

  return (
    <LinearGradient
    colors={[COLORS.PINK, COLORS.YELLOW]}
    start={{ x: 0, y: 0.8}} //Exios de rotação do circulo do avatar
    end={{ x: 0.9, y: 1}}
    style={[
        styles.container,
        {
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
        }
    ]}
    >
      <Image
        source={{ uri: imageUri || Avatar_Default }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
