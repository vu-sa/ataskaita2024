# Ačiū, kad esate kartu

<script setup lang="ts">
import { teamPhotos, biuras, socai, akademai, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, other, dag } from '../data/bendruomene'
import TeamAvatarLayout from '../components/TeamAvatarLayout.vue'
import PhotoGrid from '../components/PhotoGrid.vue'
</script>

![VU SA](/img/bendros-nuotraukos/VU-SA.jpg)

## Sritys

<PhotoGrid :photos="teamPhotos" />

## Centrinis biuras

![CB](/img/bendros-nuotraukos/Biuras2.jpg)

<TeamAvatarLayout :members="biuras" />

## Taryba

![Taryba](/img/bendros-nuotraukos/Taryba.jpg)

Daugiau apie Tarybą [skaitykite čia](/vu-sa/taryba.md).

## Parlamentas

![Parlamentas](/img/bendros-nuotraukos/Parlamentas.jpg)

Daugiau apie Parlamentą [skaitykite čia](/vu-sa/parlamentas.md).

## ISF

![ISF](/img/bendros-nuotraukos/ISF.jpg)

Daugiau apie ISF [skaitykite čia](/stipri-organizacija/isf.md).

## Revizijos komisija

![RK](/img/bendros-nuotraukos/Revizija.jpg)

Daugiau apie Revizijos komisiją [skaitykite čia](/vu-sa/revizijos-komisija.md).

## Duomenų apsaugos grupė

<TeamAvatarLayout :members="dag" />

## Socialinio proceso reikalų koordinatoriai

![Socai](/img/bendros-nuotraukos/socai.jpg)

<TeamAvatarLayout :members="socai" />

## Akademinio proceso reikalų koordinatoriai

![Akademai](/img/bendros-nuotraukos/akademai.jpg)

<TeamAvatarLayout :members="akademai" />

## Atstovų koordinatoriai

![Atstovų koordinatoriai](/img/bendros-nuotraukos/Atstovai.jpg)

<TeamAvatarLayout :members="atstovai" />

## Komunikacijos koordinatoriai

![Komunikacijos koordinatoriai](/img/bendros-nuotraukos/Komunikacija.jpg)

<TeamAvatarLayout :members="kom" />

## Marketingo koordinatoriai

![Marketingo koordinatoriai](/img/bendros-nuotraukos/Marketingas-2.jpg)

<TeamAvatarLayout :members="mark" />

## Organizacinės srities koordinatoriai

![Organizacinės srities koordinatoriai](/img/bendros-nuotraukos/Orgai.jpg)

<TeamAvatarLayout :members="org" />

## Žmogiškųjų išteklių koordinatoriai

![HR](/img/bendros-nuotraukos/HR.jpg)

<TeamAvatarLayout :members="hr" />

## Integracijos srities koordinatoriai

![Integracija](/img/bendros-nuotraukos/Integracija.jpg)

<TeamAvatarLayout :members="integration" />

## Administratoriai

![Administratoriai](/img/bendros-nuotraukos/Administratoriai-2.jpg)

<TeamAvatarLayout :members="admin" />

## PKP

![PKP](/img/bendros-nuotraukos/PKP2.jpg)

<TeamAvatarLayout :members="pkp" />

## Tarptautinių studentų koordinatoriai

![Tarptautinių studentų koordinatoriai](/img/bendros-nuotraukos/tarptautiniu.jpg)

<TeamAvatarLayout :members="intl" />

## Kiti koordinatoriai

<TeamAvatarLayout :members="other" />
