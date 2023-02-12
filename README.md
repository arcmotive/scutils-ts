# SocketCan Utilities in Typescript

## Install Dependencies

```
> yarn
```
## Build

```
yarn build
```

## Experiment with candump on vcan0:

First bring `vcan0` up:

```
sudo modprobe vcan
sudo ip link add dev vcan0 type vcan
sudo ip link set up vcan0
```

Then run our `candump`:

```
yarn start
```

In another terminal, run the link native `candump`:

```
cansend vcan0 123#DEADBEEF
```

You should see:

```
$ yarn start
(1676216302.180777) 00000123#DEADBEEF
```