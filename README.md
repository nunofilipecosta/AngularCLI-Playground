# AngularCLI-Playground

## ng new

- `ng new --help`
- `ng new ngtest --dryRun`
- `ng new ngtest --skip-install`
- `ng new ngtest --prefix nc --skip-install`
- `ng new ngtest --prefix nc --skip-tests --skip-install`
- `ng new ngtest --prefix nc --style scss --skip-tests --skip-install`
- `ng new ngtest --routing --skip-install`
- `ng new ngtest -dstS --routing --style scss`

- `ng new NgTest --routing --prefix nc --style scss skip-install --skip-git --dryRun`

- `ng serve -o`
- `ng lint NgTest --format stylish`
- `ng lint --fix`

## ng generate

- `ng generate component customer --dryRun`
- `ng generate service customer-data --dryRun`
- `ng generate class customer-model --dryRun`
- `ng g c customer --dryRun`

> ### options
>
> | Header 1   | Header 2 |
> | ---------- | -------- |
> | `--flat`   | -t       |
> | `--dryRun` | -d       |

- `ng g c pet -tsd`
- `ng g c customer`
- `ng g c orders -v Emulated -c OnPush`
- `ng g d search-box --flat false`
- `ng g s sales-data --flat false`
- `ng g cl models/customer`
- `ng g i models/person`
- `ng g e models/gender`
- `ng g p shared/init-caps`
- `ng g p shared/init-caps -m app.module`

- `ng g m login --spec false -m app.module`
- `ng g c login/loggingin` _updates login.module because it's the one closests_

## ng routing

- `ng g m admin --routing --spec false -m app.module -d`
